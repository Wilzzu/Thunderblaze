import axios from "axios";
import { useEffect, useState } from "react";
import settings from "../../settings.json";
import moment from "moment";
import { motion } from "framer-motion";
import anonImg from "../../assets/anonImg.jpg";

const FeedbackCard = (props) => {
	const [user, setUser] = useState(null);

	// Fetch feedback senders latest info from discord
	const getUser = () => {
		axios.get(`${settings.apiLocation}/discord/members`).then((res) => {
			setUser(res.data.find((members) => props.feedback.id === members.id));
		});
	};

	useEffect(() => {
		if (!user && !props.feedback.anon) getUser();
	}, [user]);

	return (
		<motion.div
			animate={{
				x: 0,
				opacity: 1,
			}}
			initial={{ x: -40, opacity: 0 }}
			transition={{ delay: props.pos * 0.1, type: "spring", stiffness: 50 }}
			key={props.feedback._id}
			className={
				"group flex w-full cursor-pointer gap-4 rounded-xl bg-blackishDark py-4 px-5 duration-150 hover:bg-opacity-100 " +
				(props.openedFeedback == props.feedback._id ? "bg-opacity-100" : "bg-opacity-0")
			}
			onClick={() =>
				props.openedFeedback == props.feedback._id
					? props.setOpenedFeedback(null)
					: props.setOpenedFeedback(props.feedback._id)
			}>
			<img
				src={props.feedback.anon ? anonImg : user?.avatar}
				alt={"User's avatar"}
				className="max-h-12 rounded-full"
			/>

			<div className="flex h-full w-full flex-col items-start justify-center overflow-hidden text-left font-hanken">
				<div className="flex items-center gap-1">
					<h1 className="font-semibold tracking-wider">
						{props.feedback.anon ? "Nimetön" : user?.nickname}
					</h1>
					<p
						className={
							"text-sm font-thin group-hover:opacity-100" +
							(props.openedFeedback == props.feedback._id ? " opacity-100" : " opacity-50")
						}>
						{moment(props.feedback.createdAt).format("DD.MM.YYYY, HH:mm")}
					</p>
				</div>
				<motion.div
					className="w-full"
					animate={{ height: props.openedFeedback == props.feedback._id ? "auto" : "1.5rem" }}
					transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}>
					<p
						className={
							"w-full duration-150" +
							(props.openedFeedback == props.feedback._id
								? " opacity-100"
								: " truncate opacity-60 group-hover:opacity-100")
						}>
						{props.feedback.text}
					</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default FeedbackCard;
