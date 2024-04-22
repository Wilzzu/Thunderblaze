import { useEffect, useRef, useState } from "react";
import useGetLoggedInUser from "../hooks/login/useGetLoggedInUser";
import anonImg from "../assets/anonImg.jpg";
import LoginButton from "../components/login/LoginButton";
import { AnimatePresence, motion } from "framer-motion";
import SuccessCheckmark from "../assets/SuccessCheckmark";
import useFeedback from "../hooks/feedback/useFeedback";
import FeedbackButton from "../components/feedback/FeedbackButton";
import FeedbackCard from "../components/feedback/FeedbackCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Feedback = () => {
	// Variables for user
	const { getUser } = useGetLoggedInUser();
	const loggedUser = useSelector((state) => state.loggedUser.user);
	const demoUser = useSelector((state) => state.demoUser.user);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showLoadingText, setShowLoadingText] = useState(false);

	// Variables for feedback content
	const inputRef = useRef(null);
	const [charCount, setCharCount] = useState(0);
	const [isAnon, setIsAnon] = useState(false);

	// Variables for handling sending
	const [showSendBtn, setShowSendBtn] = useState(false);
	const [feedbackConfirmation, setFeedbackConfirmation] = useState(false);
	const { feedbackSent, feedbackID, sendFeedback, getAllFeedbacks, allFeedbacks } = useFeedback();

	// Function for getting current time
	const getDate = () => {
		return new Date().toLocaleString("en-US", {
			hour12: false,
			hour: "2-digit",
			minute: "2-digit",
		});
	};
	const [currTime, setCurrTime] = useState(getDate());

	// Selecting feedbacks
	const [openedFeedback, setOpenedFeedback] = useState(false);

	// Function for getting logged in user's details
	const getUserLogin = async (loggedUser, demo) => {
		setUser(await getUser(loggedUser, true, demo));
		setIsLoading(false);
	};

	// Start updating current time and get users login
	useEffect(() => {
		setInterval(() => setCurrTime(getDate()), 1000);
	}, []);

	useEffect(() => {
		if (demoUser && Object.keys(demoUser)?.length) getUserLogin(demoUser, true);
		else if (loggedUser) getUserLogin(loggedUser, false);
	}, [loggedUser, demoUser]);

	// Change to confirmation div
	useEffect(() => {
		if (feedbackSent) setTimeout(() => setFeedbackConfirmation(true), 800);
	}, [feedbackSent]);

	// Check if user is moderator and fetch all feedbacks
	useEffect(() => {
		if (user?.id && user.website.isModerator) getAllFeedbacks();
	}, [user]);

	// Change textarea size when user types a lot of text and change char count, also add send button
	const handleTextareaChange = (e) => {
		e.target.style.height = "100px";
		const scrollHeight = e.target.scrollHeight;
		e.target.style.height = scrollHeight + "px";

		if (!showSendBtn) setShowSendBtn(true);
		setCharCount(e.target.value.length);
	};

	// While loading logged in user
	if (isLoading) {
		setTimeout(() => setShowLoadingText(true), 1000);
		return (
			<div className="min-h-screen bg-blackishDark pt-52 font-poppins text-whiteish">
				{showLoadingText && <h1 className="animate-pulseLight">Loading...</h1>}
			</div>
		);
	}

	return (
		<div className="flex min-h-screen items-start justify-center bg-blackishDark text-white">
			{/* If logged in */}
			{user?.id ? (
				// If part of the group
				user.discord.groupMember ? (
					<div className="flex lg:w-[1280px] flex-col items-center justify-center gap-2 lg:gap-10 px-1 lg:px-0 py-32 lg:py-40">
						{/* Feedback confirmation */}
						{feedbackConfirmation && (
							<motion.div
								animate={{ scale: 1, opacity: 1 }}
								initial={{ scale: 0.5, opacity: 0 }}
								transition={{ duration: 0.8, type: "tween" }}
								className="flex h-[420px] w-full flex-col items-center justify-center gap-10 font-poppins">
								<SuccessCheckmark />
								<motion.div
									animate={{ y: 0, opacity: 1 }}
									initial={{ y: -20, opacity: 0 }}
									transition={{ delay: 1, duration: 0.8, type: "tween" }}>
									<h1 className="text-xl">Feedback sent successfully!</h1>
									<h1 className="font-hanken text-sm">{feedbackID}</h1>
									<p className="text-sm font-light mt-2">You can now leave this page.</p>
								</motion.div>
							</motion.div>
						)}
						{/* Feedback container */}
						<AnimatePresence>
							{!feedbackSent && (
								<motion.div
									animate={{ y: 0, opacity: 1 }}
									initial={{ y: -10, opacity: 0 }}
									exit={{
										scale: 0.1,
										opacity: 0,
										transition: { type: "tween", duration: 0.8 },
									}}
									className="min-h-[420px]">
									{/* Title */}
									<motion.div
										animate={{ y: 0, opacity: 0.9 }}
										initial={{ y: 20, opacity: 0 }}
										transition={{ delay: 1.2, duration: 1, type: "tween" }}
										className="mb-4 font-poppins text-xl text-pretty lg:text-wrap">
										<h1>Send feedback to the moderation team:</h1>
									</motion.div>
									{/* User information*/}
									<motion.div
										animate={{ y: 0, opacity: 1 }}
										initial={{ y: -100, opacity: 0 }}
										transition={{ duration: 1, type: "tween" }}
										className="h-82 flex gap-2 lg:gap-4 rounded-xl bg-blackishLight p-4 lg:p-6 font-hanken max-w-[98dvw] lg:max-w-full overflow-hidden">
										<div className="w-16">
											<img
												src={isAnon ? anonImg : user.discord.picture}
												alt="User avatar"
												className="w-12 lg:w-16 rounded-full"
											/>
										</div>
										<div className="h-full w-full overflow-hidden">
											<div className="flex items-center lg:items-end gap-2 text-whiteish">
												<h1 className="text-left text-lg lg:text-xl font-medium w-full lg:w-auto truncate overflow-hidden">
													{isAnon ? "Anonymous" : user.discord.name.split("#")[0]}
												</h1>
												<p className="hidden lg:block text-sm lg:text-base font-thin opacity-70">
													Today at {currTime}
												</p>
											</div>
											{/* Text field */}
											<textarea
												ref={inputRef}
												onChange={(e) => handleTextareaChange(e)}
												placeholder="Your feedback..."
												className={`h-[100px] w-full lg:w-[500px] resize-none bg-blackishLight lg:pr-6 lg:text-lg outline-none placeholder:text-whiteish placeholder:opacity-50 ${
													charCount > 1000 ? "text-red-500" : "text-whiteish"
												}`}
											/>
										</div>
									</motion.div>
									<div className="mt-3 flex select-none justify-between">
										{/* Anonymous button */}
										<motion.div
											animate={{ x: 0, opacity: 1 }}
											initial={{ x: -50, opacity: 0 }}
											transition={{ delay: 0.5, duration: 1, type: "tween" }}>
											<button
												onClick={() => setIsAnon(!isAnon)}
												className={
													"rounded-lg py-2 px-3 font-hanken duration-100 hover:cursor-pointer border-blackishLight hover:border-[#414141] border-[3px] hover:bg-[#414141] " +
													(isAnon && "bg-blackishLight")
												}>
												<h1>{isAnon ? "✅" : "❌"} Send as anonymous</h1>
											</button>
										</motion.div>
										{/* Character count */}
										<motion.div
											animate={{ x: 0, opacity: 1 }}
											initial={{ x: 50, opacity: 0 }}
											transition={{ delay: 0.5, duration: 1, type: "tween" }}>
											<p
												className={`text-right font-poppins duration-200  ${
													charCount > 1000 ? "text-red-500" : "text-white"
												}`}>
												{charCount}/1000
											</p>
										</motion.div>
									</div>
									{/* Send Button */}
									{showSendBtn && (
										<FeedbackButton
											charCount={charCount}
											user={user}
											textarea={inputRef}
											anon={isAnon}
											sendFeedback={sendFeedback}
										/>
									)}
								</motion.div>
							)}
						</AnimatePresence>
						{/* List feedbacks */}
						{allFeedbacks && user.website.isModerator && (
							<motion.div
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								className="flex h-full w-full flex-col items-center justify-start">
								<div className="mb-5 font-poppins text-2xl">
									<h1>Feedbacks</h1>
									<p className="text-sm font-light">Only visible to moderators</p>
								</div>
								<div className="scrollNormal scrollRight scrollPadding flex lg:max-h-[640px] max-w-[98dvw] lg:max-w-full overflow-hidden lg:w-1/2 flex-col items-start justify-start gap-2 lg:overflow-auto rounded-3xl bg-blackishLight p-2 lg:p-10 scrollbar scrollbar-thumb-lime scrollbar-thumb-rounded-full scrollbar-w-2">
									{/* Example feedbacks for demo */}
									<FeedbackCard
										key={"example-1"}
										feedback={{
											_id: "example-1",
											anon: true,
											text: "This is an example feedback",
											createdAt: new Date(),
										}}
										pos={0}
										setOpenedFeedback={setOpenedFeedback}
										openedFeedback={openedFeedback}
										loggedUser={user}
									/>
									<FeedbackCard
										key={"example-2"}
										feedback={{
											_id: "example-2",
											anon: true,
											text: "This is a long example feedback. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nemo aliquam possimus, quam nesciunt odio inventore illum sed maxime. Consectetur doloremque debitis placeat ea aspernatur inventore, error commodi? Tenetur, fuga?",
											createdAt: new Date(),
										}}
										pos={1}
										setOpenedFeedback={setOpenedFeedback}
										openedFeedback={openedFeedback}
										loggedUser={user}
									/>

									{/* Real feedbacks */}
									{allFeedbacks
										?.slice(0)
										.reverse()
										.map((e, i) => {
											return (
												<FeedbackCard
													key={e._id}
													feedback={e}
													pos={i}
													setOpenedFeedback={setOpenedFeedback}
													openedFeedback={openedFeedback}
													loggedUser={user}
												/>
											);
										})}
								</div>
							</motion.div>
						)}
					</div>
				) : (
					// If not part of the group
					<div className="mt-40 font-poppins flex flex-col gap-4 items-center px-10 lg:px-0">
						<h1>This page is only for group members, sorry!</h1>
						<Link
							to="/"
							className="duration-150 rounded-full w-fit p-2 px-4 border-2 hover:scale-105">
							Back to home
						</Link>
					</div>
				)
			) : (
				// If not logged in
				<div className="mt-52 flex flex-col items-center justify-center gap-4">
					<div>
						<h1 className="font-poppins text-xl text-red-600">Not logged in!</h1>
						<h1 className="font-hanken text-base text-whiteish">Login to see the page:</h1>
					</div>
					<LoginButton
						default={
							" border-2 border-whiteish bg-blackishLight w-[11rem] h-[3.4rem] lg:w-36 lg:h-12 rounded-[0.75rem]"
						}
						hover={"hover:scale-[1.03] hover:shadow-custom4 hover:shadow-[#000000]"}
						textEnable={true}
					/>
				</div>
			)}
		</div>
	);
};

export default Feedback;
