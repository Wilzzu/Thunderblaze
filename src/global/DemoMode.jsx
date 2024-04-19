import { useState } from "react";
import useHandleDemoMode from "../hooks/login/useHandleDemoMode";
import tabButton from "../assets/tabButton.svg";
import { cn } from "../lib/utils";

const DemoMode = () => {
	const { demoUser, handleDemoMode } = useHandleDemoMode();
	const [open, setOpen] = useState(false);

	return (
		// Demo navigation container
		<div className="fixed -bottom-0 z-50 w-full text-white font-poppins flex justify-center">
			<div
				className={cn(
					"absolute group flex flex-col items-center -bottom-[7.4rem] duration-300",
					open ? "bottom-0" : "hover:-bottom-[6.5rem]"
				)}>
				<button
					className="flex items-center justify-center w-52 h-12"
					onClick={() => setOpen((prev) => !prev)}>
					<div
						className={cn(
							"bg-blue-400/70 group-hover:bg-blue-500/95 backdrop-blur-sm w-full h-full flex items-center justify-center drop-shadow duration-300",
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
								"drop-shadow mb-3 duration-300",
								open ? "-mb-1" : "group-hover:-mb-[0.1rem]"
							)}>
							Demo menu
						</p>
					</div>
				</button>

				<div className="bg-blue-500/95 flex flex-col gap-1 p-4 px-6 rounded-t-xl pb-2 backdrop-blur-sm">
					<h2 className="text-left text-sm">Override user session:</h2>
					<div className="flex gap-3">
						<button
							className={cn(
								"rounded-xl p-3 px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								!demoUser?.demo && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("none")}>
							No override
						</button>
						<button
							className={cn(
								"rounded-xl p-3 px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								demoUser?.demo?.type === "logged" && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("logged")}>
							Non-Member
						</button>
						<button
							className={cn(
								"rounded-xl p-3 px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								demoUser?.demo?.type === "member" && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("member")}>
							Member
						</button>
						<button
							className={cn(
								"rounded-xl p-3 px-4 bg-gradient-to-br from-transparent to-blue-500 border-2 border-blue-400 drop-shadow-md hover:bg-blue-400 duration-300",
								demoUser?.demo?.type === "moderator" && "bg-blue-400"
							)}
							onClick={() => handleDemoMode("moderator")}>
							Moderator
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DemoMode;
