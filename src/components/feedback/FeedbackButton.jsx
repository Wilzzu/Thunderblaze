import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const FeedbackButton = (props) => {
	const [buttonText, setButtonText] = useState("");
	const [showBtnText, setShowBtnText] = useState(false);
	const [disableBtn, setDisableBtn] = useState(false);
	const [timeLeft, setTimeLeft] = useState(null);
	const timeLimit = 3600000;
	// const timeLimit = 3600000;

	// Converting milliseconds to minutes and seconds
	const convertMS = (ms) => {
		let min = Math.floor(ms / 60000);
		let sec = ((ms % 60000) / 1000).toFixed(0);
		return (min ? min + "m " : "") + (sec < 10 ? "0" : "") + (sec == 60 ? "0" : sec) + "s";
	};

	// Function for sending the feedback
	const handleSend = () => {
		// Check if feedback is correct
		if (Date.now() - parseInt(props.user.website.lastFeedback) < timeLimit)
			setButtonText(
				`You can send feedback again in ${convertMS(
					timeLimit - (Date.now() - parseInt(props.user.website.lastFeedback))
				)}`
			);
		else if (props.charCount > 1000) {
			setButtonText("Feedback couldn't be sent because it has over 1000 characters.");
		} else if (props.charCount < 15) setButtonText("Feedback is too short.");
		// Send feedback if everything is correct
		else {
			setButtonText("");
			props.sendFeedback(props.user, props.textarea.current.value, props.anon);
		}

		// Show user why they can't send their feedback
		if (!showBtnText) {
			setTimeout(() => {
				setShowBtnText(false);
			}, 4500);
		}
		setShowBtnText(true);
	};

	// Function for updating button to be disabled if the user has sent feedback in the last hour
	const updateDisabledTime = (lastFeedback) => {
		if (lastFeedback && timeLimit - (Date.now() - parseInt(lastFeedback)) > 0) {
			if (!disableBtn) setDisableBtn(true);
			setTimeLeft(timeLimit - (Date.now() - parseInt(lastFeedback)));
		} else setDisableBtn(false);
	};

	// Update disabled time when the button is first added
	useEffect(() => {
		updateDisabledTime(props.user.website.lastFeedback);
	}, []);

	// Update disabled time every second
	useEffect(() => {
		const timer = setTimeout(() => updateDisabledTime(props.user.website.lastFeedback), 1000);
		return () => clearTimeout(timer);
	}, [timeLeft]);

	return (
		<div className="h-36">
			{/* Main button */}
			<motion.div
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: 30, opacity: 0 }}
				transition={{ duration: 1, type: "tween" }}>
				{disableBtn ? (
					<button
						disabled
						className="mt-10 w-80 rounded-lg border-2 border-gray-600 border-opacity-80 bg-gray-500 bg-opacity-40 py-4 font-poppins outline-none duration-200">
						<h1 className="opacity-80">{convertMS(timeLeft)}</h1>
					</button>
				) : (
					<button
						onClick={handleSend}
						className={`mt-10 w-80 rounded-lg border-2 bg-opacity-40 py-4 font-poppins outline-none duration-200 ${
							props.charCount < 15 || props.charCount > 1000
								? "border-red-500 bg-red-500 hover:bg-red-500"
								: "border-limeDark bg-limeDark hover:bg-opacity-100"
						}`}>
						Send feedback
					</button>
				)}
			</motion.div>

			{/* Button text */}
			<AnimatePresence>
				{showBtnText && (
					<motion.div
						animate={{ y: 0, opacity: 1 }}
						initial={{ y: -10, opacity: 0 }}
						exit={{ y: -10, opacity: 0 }}>
						<p className="mt-2 h-8 font-hanken">{buttonText}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FeedbackButton;
