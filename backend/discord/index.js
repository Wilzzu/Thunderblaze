const {
	Client,
	Events,
	GatewayIntentBits,
	ActionRowBuilder,
	ButtonBuilder,
} = require("discord.js");
require("dotenv").config();
const colors = require("colors");
const axios = require("axios");
const token = process.env.VITE_DCTOKEN;
const settings = require("../../src/settings.json");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildVoiceStates,
	],
});

// When the Discord bot comes online
client.once(Events.ClientReady, async (e) => {
	console.log(`Discord bot online! Logged in as ${e.user.tag}`.blue);
	await dcGetMembers(true);
	setInterval(() => updateMessages(), 5 * 60 * 1000); // Update messages every 5 minutes
});

// Global values
let membersData = null;
let refreshRate = 86400000; //1 day: 86400000, 10 sec: 10000
let lastUpdate = 0;

// Commands for Discord bot
const websiteCmd = ["!website", "!homepage", "!www"];
const statsCmd = ["!stats", "!statsit", "!statistics"];
const videosCmd = ["!videot", "!video", "!videos", "!leffat", "!leffa"];
const feedbackCmd = ["!palaute", "!feedback"];

// Add button that redirects to the correct website
const addBtn = (label, url, emoji) => {
	return new ActionRowBuilder().addComponents(
		new ButtonBuilder().setLabel(label).setURL(url).setStyle("Link").setEmoji(emoji)
	);
};

const messageCache = [];

const addToMsgCache = (author) => {
	const foundUser = messageCache.find((user) => user.id === author.id);
	if (foundUser) {
		const index = messageCache.indexOf(foundUser);
		messageCache[index].newMessageAmount++;
	} else {
		messageCache.push({
			id: author.id,
			name: author.username,
			avatar: author.displayAvatarURL(),
			newMessageAmount: 1,
		});
	}
};

function updateMessages() {
	if (!messageCache.length) return;
	axios
		.post(`${settings.apiLocation}/api/stats/discord/messages`, { cache: messageCache })
		.then((res) => {
			messageCache.length = 0;
		})
		.catch((error) => {
			console.error("There was an error while updating messages!");
		});
}

// Listen to new messages
client.on("messageCreate", async (message) => {
	// If message is from a bot or a DM, return
	if (message.author.bot || !message.guild) return;

	// Add to message cache
	addToMsgCache(message.author);

	// Check for commands
	if (websiteCmd.includes(message.content.toLowerCase()))
		message.reply({
			components: [addBtn("Thunderblaze website", "https://thunderblaze.wilzzu.dev/", "🌐")],
		});

	if (statsCmd.includes(message.content.toLowerCase()))
		message.reply({
			components: [addBtn("Statistics", "https://thunderblaze.wilzzu.dev/stats", "📈")],
		});

	if (feedbackCmd.includes(message.content.toLowerCase()))
		message.reply({
			components: [addBtn("Send feedback", "https://thunderblaze.wilzzu.dev/feedback", "📨")],
		});

	if (videosCmd.includes(message.content.toLowerCase()))
		message.reply({
			components: [addBtn("Thunderblaze videos", "https://thunderblaze.wilzzu.dev/videos", "📺")],
		});

	// Timeout DB
	if (
		message.channelId === "1077428918941917294" &&
		message.content.includes("|") &&
		!settings.dev
	) {
		let msg = message.content.split("|");
		let guild = client.guilds.cache.get("582575029800402974");
		let user = await guild.members.fetch(msg[0]);
		const data = {
			id: msg[0],
			name: msg[1],
			avatar: user.displayAvatarURL(),
		};
		axios
			.post(`${settings.apiLocation}/api/stats/discord/timeouts/${msg[0]}`, data)
			.then((res) => {
				console.log("Added new timeout: " + msg[1]);
			})
			.catch((error) => {
				console.error("There was an error while creating timeout!", error);
			});
	}
});

// Get members and voice channel members
const dcGetMembers = async (force = false) => {
	// If last update was under 24 hours ago, return old data
	if (!shouldUpdate() && !force) {
		// console.log("Latest member update was under 24 hours ago, serving old data".yellow);
		return membersData;
	}

	// Else check for fetch new data
	let members = await client.guilds.cache
		?.find((g) => g.id === process.env.DCGUILDID)
		?.members?.fetch();

	try {
		let allMembers = [];
		members.forEach((e) => {
			if (!e.user.bot) {
				let user = {
					nickname: e.nickname ? e.nickname : e.user.username,
					username: e.user.username,
					avatar: e.user.displayAvatarURL(),
					id: e.user.id,
				};
				allMembers.push(user);
			}
		});
		console.log(`Updated members list with ${allMembers.length} members`.green);
		membersData = allMembers;
		return allMembers;
	} catch (error) {
		console.log(error);
	}
};

// Get voice members
const dcGetVoiceMembers = async () => {
	let channels = await client.guilds.cache
		?.find((g) => g.id === process.env.DCGUILDID)
		.channels?.fetch();

	try {
		let voiceMembers = [];
		channels.forEach((channel) => {
			if (channel.type === 2 && channel.members.size > 0) {
				channel.members.forEach((e) => {
					if (!e.user.bot) {
						let user = {
							nickname: e.nickname ? e.nickname : e.user.username,
							username: e.user.username,
							avatar: e.user.displayAvatarURL(),
							id: e.user.id,
						};
						voiceMembers.push(user);
					}
				});
			}
		});
		voiceData = voiceMembers;
		return voiceMembers;
	} catch (error) {
		console.log(error);
	}
};

const formatTime = (time, addPadding) => {
	const date = new Date(time);
	const min = date.getUTCMinutes();
	let sec = date.getUTCSeconds();
	const hour = date.getUTCHours();
	if (sec < 10 && addPadding) sec = sec.toString().padStart(2, "0");

	return `${hour > 0 ? hour + "h " : ""}${min > 0 ? min + "m " : ""}${sec}s`;
};

// Add padding to text depending on the length
const formatText = (val, amount) => {
	const padding = amount - val.toString().length;
	const first = Math.floor(padding / 2);
	const second = padding - first;

	return `${" ".repeat(first)}${val}${" ".repeat(second)}`;
};

// Check if latest update was over 24 hours ago
const shouldUpdate = () => {
	if (Date.now() > lastUpdate + refreshRate) {
		lastUpdate = Date.now();
		return true;
	} else return false;
};

// Log the bot into Discord
client.login(token);

// Export functions
module.exports = {
	dcGetMembers,
	dcGetVoiceMembers,
};
