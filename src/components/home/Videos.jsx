import { Link } from "react-router-dom";
import TiltVideoCard from "./TiltVideoCard";

const Videos = () => {
	return (
		<div className="w-full h-full bg-[url('./assets/logo-bg-128.png')] bg-repeat bg-fixed animate-scrolling overflow-hidden">
			<div className="centerDiv max-w-[1280px]">
				<div className="flex h-[850px] items-center justify-center gap-10">
					{/* LEFT */}
					<div className="flex w-2/6 flex-col gap-2">
						<h1 className="text-left font-poppins text-5xl font-bold leading-[3.5rem]">
							<span className="text-lime">High-Quality</span> Content
						</h1>
						<p className="text-left font-hanken text-xl">
							At Thunderblaze, we produce outstanding videos. Our team consists of top-tier gamers
							and editors, ensuring exceptional content.
						</p>
						<p className="text-left font-hanken text-xl">
							We offer a diverse range of videos suitable for all ages, covering popular titles like
							Rocket League and CS2.
						</p>
						<p className="text-left font-hanken text-xl">
							Check out our videos by clicking the button below!
						</p>
						<div className="mt-6 flex h-28 items-start">
							<Link
								to={"/videos"}
								className="w-64 rounded-3xl bg-lime py-4 text-2xl font-bold text-white duration-300 hover:w-[16.5rem] hover:py-[1.15rem] hover:text-[1.65rem] hover:shadow-2xl hover:shadow-lime hover:duration-200">
								Videot
							</Link>
						</div>
					</div>

					{/* RIGHT */}
					<div className="w-1/2 h-full relative rotate-3 scale-110">
						<div className="animate-float absolute z-40">
							<TiltVideoCard
								size={"w-[15rem] h-[12.4rem]"}
								pos={"top-[9rem] left-[9rem]"}
								hover={"hover:top-[7rem]"}
								z={"z-40"}
								img={
									"https://media2.giphy.com/media/7cwxLhg4ovPUOTUyvG/giphy.gif?cid=ecf05e47g2mciqwri3tpqic4ugpy1yl3dz7wt3pbljld5huj&rid=giphy.gif&ct=g"
								}
							/>
						</div>
						<div className="animate-float2 absolute z-30 hover:z-50 duration-150 animation-delay-[3000ms]">
							<TiltVideoCard
								size={"w-[15rem] h-[18rem]"}
								pos={"top-[12rem] left-[18rem]"}
								hover={"hover:top-[10rem] hover:left-[22rem]"}
								z={"z-30"}
								img={
									"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZudzhyb3YzZGJ4ZXRtbXNsb3d6bDVub3RnOGg4aTY3NTR6eTd3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Upal72olGEO4sdOifD/giphy.gif"
								}
							/>
						</div>
						<div className="animate-float absolute z-20 hover:z-50 duration-150 animation-delay-1000">
							<TiltVideoCard
								size={"w-[16rem] h-[18rem]"}
								pos={"top-[18rem] left-[6rem]"}
								hover={"hover:top-[16rem] hover:left-[3rem]"}
								z={"z-20"}
								img={
									"https://media0.giphy.com/media/2roTVUF0LFvZwYcCMb/giphy.gif?cid=ecf05e471ng66c3pzio9ku130putg1ga7bw8rovgnfolamgz&rid=giphy.gif&ct=g"
								}
							/>
						</div>
						<div className="animate-float2 absolute z-10 hover:z-50 duration-150">
							<TiltVideoCard
								size={"w-[20rem] h-[18rem]"}
								pos={"top-[24rem] left-[11rem]"}
								hover={"hover:top-[28rem]"}
								z={"z-10"}
								img={
									"https://media0.giphy.com/media/aMalEwAvGOZptgEpAR/giphy.gif?cid=ecf05e47togy9eb6q1dcdeijzdhlulv3kwgu3my14bgfisuw&rid=giphy.gif&ct=g"
								}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom wave */}
			<div className="waveSpacer waveAspect1 wave1" />
		</div>
	);
};

export default Videos;
