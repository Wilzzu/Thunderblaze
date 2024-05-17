const asyncHandler = require("express-async-handler");
const { dcGetMembers, dcGetVoiceMembers } = require("../discord/index");
const { default: axios } = require("axios");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.VITE_SUPAURL, process.env.VITE_SUPAAPI);

// @desc    Get discord members
// @route   GET /api/discord/members/:refresh
const getMembers = asyncHandler(async (req, res) => {
	let members;
	if (req.params.refresh == "refresh") members = await dcGetMembers(true);
	else members = await dcGetMembers();
	res.status(200).json(members);
});

// @desc    Get discord voice channel members
// @route   GET /api/discord/voicemembers/:refresh
const getVoiceMembers = asyncHandler(async (req, res) => {
	let voiceMembers = await dcGetVoiceMembers();
	res.status(200).json(voiceMembers);
});

// @desc    Get new img for user and add it to supabase if old img is invalid
// @route   GET /api/discord/validateimg?id=some&img=data
const getValidatedImg = asyncHandler(async (req, res) => {
	const validatedImg = await axios
		.get(req.query.img)
		.then((res) => {
			return req.query.img;
		})
		.catch(async () => {
			const members = await dcGetMembers();
			const user = members.find((e) => e.id === req.query.id);
			const { data, error } = await supabase.from("users").select().eq("id", req.query.id);
			let userAvatar = null;

			if (data) {
				// If user is not in the group
				if (!user) {
					userAvatar = await getUserAvatar(req.query.id);
					// Update supabase user with new img
					const { error } = await supabase
						.from("users")
						.update({ discord: { ...data[0].discord, picture: userAvatar } })
						.eq("id", req.query.id);

					if (error) console.log(error);
				}
				// If user is in the group
				else {
					// Check if the img is from discord server and has the same user id
					let imgId = req.query.img.split("avatars/")[1].split("/")[0];
					const regex = /^(https|http):\/\/cdn\.discordapp\.com\/avatars\//;

					if (!regex.test(req.query.img)) return;
					if (imgId !== req.query.id) return;

					// Update supabase user with new img
					const { error } = await supabase
						.from("users")
						.update({ discord: { ...data[0].discord, picture: user.avatar } })
						.eq("id", req.query.id);

					if (error) console.log(error);
					userAvatar = user.avatar;
				}
			}

			if (error) console.log(error);
			return userAvatar;
		});
	res.status(200).json(validatedImg);
});

// Get user avatar for users who are not in the group
const getUserAvatar = async (id) => {
	return await axios
		.get(`https://discord.com/api/v9/users/${id}`, {
			headers: { Authorization: `Bot ${process.env.DISCORD_TOKEN}` },
		})
		.then(async (res, err) => {
			if (res) {
				if (res.data.avatar) {
					return `https://cdn.discordapp.com/avatars/${res.data.id}/${res.data.avatar}.png`;
				} else return `https://cdn.discordapp.com/embed/avatars/${res.data.discriminator % 5}.png`;
			} else console.log(err);
		});
};

// Export functions
module.exports = {
	getMembers,
	getVoiceMembers,
	getValidatedImg,
	getUserAvatar,
};
