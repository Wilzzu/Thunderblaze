import { useEffect, useRef, useState } from "react";
import useHandleDemoMode from "../hooks/login/useHandleDemoMode";
import tabButton from "../assets/tabButton.svg";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const DemoMode = () => {
	const { demoUser, handleDemoMode } = useHandleDemoMode();
	const [open, setOpen] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const prevDemo = useRef("initial");

	// When user changes demo mode show toast
	useEffect(() => {
		if (demoUser?.demo?.type !== prevDemo.current && prevDemo.current !== "initial") {
			setShowToast(true);
			setTimeout(() => {
				if (demoUser?.demo?.type === prevDemo.current) setShowToast(false);
			}, 3000);
		}
		prevDemo.current = demoUser?.demo?.type;
	}, [demoUser]);

	useEffect(() => {
		if (!open) setShowToast(false);
	}, [open]);

	return (
		// Demo navigation container
		<div className="fixed -bottom-0 z-50 w-full text-white font-poppins text-xs lg:text-base flex justify-center">
			<div
				className={cn(
					"absolute group flex flex-col items-center -bottom-[6.6rem] lg:-bottom-[7.7rem] duration-300 z-10",
					open ? "bottom-0 lg:bottom-0" : "lg:hover:-bottom-[6.8rem]"
				)}>
				<button
					className="flex items-center justify-center w-52 h-12"
					onClick={() => setOpen((prev) => !prev)}>
					<div
						className={cn(
							"bg-blue-400/70 lg:group-hover:bg-blue-500/95 backdrop-blur-sm w-full h-full flex items-center justify-center drop-shadow duration-300",
							open && "bg-blue-500/95"
						)}
						style={{
							mask: `url(${tabButton})`,
							WebkitMask: `url(${tabButton})`,
							maskRepeat: "no-repeat",
							maskSize: "100% 100%",
						}}>
						<p
							className={cn(
								"drop-shadow mb-3 duration-300 text-base",
								open ? "-mb-1" : "lg:group-hover:-mb-[0.1rem]"
							)}>
							Demo menu
						</p>
					</div>
				</button>

				<div className="bg-blue-500/95 flex flex-col gap-1 p-2 lg:p-4 lg:px-6 rounded-t-lg lg:rounded-t-xl pb-2 backdrop-blur-sm">
					<h2 className="text-left text-xs lg:text-sm">Override user session:</h2>
					<div className="flex gap-1 lg:gap-3">
						<button
							className={cn(
								"rounded-xl p-2 lg:p-3 lg:px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								!demoUser?.demo && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("none")}>
							No override
						</button>
						<button
							className={cn(
								"rounded-xl p-2 lg:p-3 lg:px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								demoUser?.demo?.type === "non-member" && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("non-member")}>
							Non-Member
						</button>
						<button
							className={cn(
								"rounded-xl p-2 lg:p-3 lg:px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								demoUser?.demo?.type === "member" && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("member")}>
							Member
						</button>
						<button
							className={cn(
								"rounded-xl p-2 lg:p-3 lg:px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								demoUser?.demo?.type === "moderator" && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("moderator")}>
							Moderator
						</button>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{showToast && (
					<motion.button
						key={demoUser?.demo?.type}
						initial={{ y: 44, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 44, opacity: 0 }}
						transition={{ opacity: { duration: 0.14 }, y: { duration: 0.2 } }}
						onClick={() => setShowToast(false)}
						className="absolute z-0 bottom-40 bg-gradient-to-br from-blue-500 to-blue-700 text-center flex items-center justify-center p-3 lg:p-4 rounded-lg shadow-lg">
						<p className="lg:text-sm">
							{demoUser?.demo?.type ? (
								<>
									Now viewing page as{" "}
									<span className="lg:font-semibold px-2 py-1 bg-blackishDark rounded-lg ml-[1px]">
										{demoUser?.demo?.type[0].toUpperCase() + demoUser?.demo?.type.slice(1)}
									</span>
								</>
							) : (
								<>Exited demo mode</>
							)}
						</p>
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DemoMode;
