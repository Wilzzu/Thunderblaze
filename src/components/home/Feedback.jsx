import { useInView } from "framer-motion";
import heroImg from "../../assets/homeModeratorsHero.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Feedback = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className="centerDiv max-w-[1280px]">
			<div className="flex h-[850px] items-center justify-center gap-32">
				{/* LEFT */}
				<img
					ref={ref}
					style={{
						transform: isInView ? "none" : "translateX(-40px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
					}}
					src={heroImg}
					alt="Moderator Image"
					className="w-[38%] drop-shadow-2xl"
				/>

				{/* RIGHT */}
				<div
					style={{
						transform: isInView ? "none" : "translateX(40px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
					className="flex w-[30%] flex-col gap-2">
					<h1 className="text-right font-poppins text-5xl font-bold leading-[3.5rem]">
						We Value Your <span className="text-lime">Feedback</span>
					</h1>
					<p className="text-right font-hanken text-xl">
						Every Thunderblaze member can influence our operations by sending us feedback. We go
						through all the feedbacks at our monthly moderation team meeting.<br></br>This is how
						make sure everyone has a pleasant stay in Thunderblaze!
					</p>
					<p className="text-right font-hanken text-xl">
						If you're already a Thunderblaze member, send us feedback via the button below!
					</p>
					<div className="mt-6 flex h-28 items-start justify-end">
						<Link
							to={"/feedback"}
							className="w-[16.5rem] rounded-3xl bg-lime py-4 text-2xl font-bold text-white duration-300 hover:w-[17.15rem] hover:py-[1.15rem] hover:text-[1.6rem] hover:shadow-2xl hover:shadow-lime hover:duration-200">
							Send Feedback
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
