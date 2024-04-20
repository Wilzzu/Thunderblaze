import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import settings from "../../settings.json";

const ProfileButton = (props) => {
	const [avatar, setAvatar] = useState(props.discord?.picture);

	const validateAvatar = async () => {
		setAvatar(
			await axios
				.get(
					`${settings.apiLocation}/discord/validateimg?id=${props.discord?.provider_id}&img=${props.discord?.picture}`
				)
				.then((res) => res.data)
		);
	};

	useEffect(() => {
		if (!props?.demo) validateAvatar();
		else setAvatar(props.discord?.picture);
	}, [props?.demo]);

	return (
		<Link
			to="/profile"
			className="flex h-11 max-w-[16rem] items-center justify-end gap-2 duration-150 transition-transform hover:scale-[1.02]">
			<h1
				className={
					"lg:line-clamp-1 font-hanken text-base lg:text-lg font-semibold " +
					(props.textEnable ? "line-clamp-1 text-lg lg:text-xl" : "hidden")
				}>
				{props.discord?.name.split("#")[0]}
			</h1>
			<img
				src={avatar}
				alt=""
				className={"max-h-full max-w-full " + (props.rounded ? "rounded-md" : "rounded-full")}
			/>
		</Link>
	);
};

export default ProfileButton;
