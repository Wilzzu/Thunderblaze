import { useState } from "react";
import settings from "../../settings.json";
import axios from "axios";
import { useSupabase } from "../login/useSupabase";

const useFeedback = () => {
	const { supabase } = useSupabase();

	const [feedbackSent, setFeedbackSent] = useState(false);
	const [feedbackID, setFeedbackID] = useState(null);
	const [allFeedbacks, setAllFeedbacks] = useState(null);

	const getAllFeedbacks = async () => {
		axios.get(`${settings.apiLocation}/feedback`).then((res) => {
			setAllFeedbacks(res.data);
		});
	};
	const updateUserLastFeedback = async (user) => {
		const { error } = await supabase
			.from("users")
			.update({
				website: {
					isModerator: user.website.isModerator,
					lastFeedback: Date.now(),
				},
			})
			.eq("id", user.id);

		if (error) {
			console.log(error);
		}
	};

	const sendFeedback = (user, input, anon) => {
		const data = {
			text: input,
			id: user.id,
			name: user.discord.name,
			anon: anon,
		};
		axios
			.post(`${settings.apiLocation}/feedback`, data)
			.then((res) => {
				console.log(res);
				setFeedbackID(`ID: ${res.data._id}`);
				setFeedbackSent(true);
				updateUserLastFeedback(user);
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	};

	return { feedbackSent, feedbackID, sendFeedback, getAllFeedbacks, allFeedbacks };
};

export default useFeedback;
