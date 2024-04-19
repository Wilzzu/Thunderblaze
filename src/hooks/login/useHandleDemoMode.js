import { useState } from "react";
import anonImg from "../../assets/anonImg.jpg";
import { useDispatch } from "react-redux";
import { addDemoUser } from "../../store";

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
	const [demoUser, setDemoUser] = useState(null);
	const dispatch = useDispatch();

	const handleDemoMode = (type) => {
		let user = demoUserObject;
		switch (type) {
			case "logged":
				user = {
					...demoUserObject,
					discord: { ...demoUserObject.discord, name: "Non-Member demo user" },
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
		setDemoUser(user);
		dispatch(addDemoUser(user));
	};
	return { demoUser, handleDemoMode };
};

export default useHandleDemoMode;
