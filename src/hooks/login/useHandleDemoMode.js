import { useState } from "react";
import useSessionStorage from "../useSessionStorage";
import anonImg from "../../assets/anonImg.jpg";

const demoUserObject = {
	id: "1",
	discord: {
		name: "Demo user",
		picture: anonImg,
		groupMember: false,
		provider_id: "1",
	},
	website: {
		isModerator: false,
		lastFeedback: 0,
	},
	demo: {
		type: "normal",
	},
};

const useHandleDemoMode = () => {
	const { getSessionItem, setSessionItem } = useSessionStorage();
	const [demoUser, setDemoUser] = useState(getSessionItem("ThunderblazeSession", "demo") || null);

	const handleDemoMode = (type) => {
		let user = demoUserObject;
		switch (type) {
			case "logged":
				user = {
					...demoUserObject,
					discord: { ...demoUserObject.discord, name: "Logged, non member demo user" },
					demo: { type: "logged" },
				};
				break;
			case "member":
				user = {
					...demoUserObject,
					discord: { ...demoUserObject.discord, name: "Member demo user", groupMember: true },
					demo: { type: "member" },
				};
				break;
			case "moderator":
				user = {
					...demoUserObject,
					discord: { ...demoUserObject.discord, name: "Moderator demo user", groupMember: true },
					website: { ...demoUserObject.website, isModerator: true },
					demo: { type: "moderator" },
				};
				break;
			case "none":
				user = null;
				break;
		}
		console.log("Setting demo user", user);
		setSessionItem("ThunderblazeSession", "demo", user);
		setDemoUser(user);
	};
	return { demoUser, handleDemoMode };
};

export default useHandleDemoMode;
