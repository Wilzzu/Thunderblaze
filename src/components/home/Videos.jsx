import { Link } from "react-router-dom";
import TiltVideoCard from "./TiltVideoCard";

const Videos = () => {
	return (
		<div className="w-full h-full bg-[url('./assets/logo-bg-128.png')] bg-repeat bg-fixed animate-scrolling overflow-hidden">
			<div className="centerDiv max-w-[1280px]">
				<div className="flex flex-col-reverse lg:flex-row lg:h-[850px] items-center justify-center lg:gap-10">
					{/* LEFT */}
					<div className="flex lg:w-2/6 flex-col gap-1 lg:gap-2 px-2 lg:px-0">
						<h1 className="lg:text-left font-poppins text-5xl font-bold lg:leading-[3.5rem] mb-4 lg:mb-0">
							<span className="text-lime">High-Quality</span> Content
						</h1>
						<p className="lg:text-left font-hanken text-lg font-medium lg:font-normal lg:text-xl text-balance lg:text-wrap">
							At Thunderblaze, we produce outstanding videos. Our team consists of top-tier gamers
							and editors, ensuring exceptional content.
						</p>
						<p className="lg:text-left font-hanken text-lg font-medium lg:font-normal lg:text-xl text-balance lg:text-wrap">
							We offer a diverse range of videos suitable for all ages, covering popular titles like
							Rocket League and CS2.
						</p>
						<p className="lg:text-left font-hanken text-lg font-medium lg:font-normal lg:text-xl text-balance lg:text-wrap">
							Check out our videos by clicking the button below!
						</p>
						<div className="mt-6 flex h-28 items-start justify-center lg:justify-normal mb-8 lg:mb-0">
							<Link
								to={"/videos"}
								className="w-64 rounded-3xl bg-lime py-4 text-2xl font-bold text-white duration-300 hover:w-[16.5rem] hover:py-[1.15rem] hover:text-[1.65rem] hover:shadow-2xl hover:shadow-lime hover:duration-200">
								Videos
							</Link>
						</div>
					</div>

					{/* RIGHT */}
					<div className="w-full lg:w-1/2 h-[470px] lg:h-full relative rotate-3 lg:scale-110 mt-4 lg:mt-0">
						<div className="animate-float absolute z-40">
							<TiltVideoCard
								size={"w-[11.5rem] lg:w-[15rem] h-[9.5rem] lg:h-[12.4rem]"}
								pos={"top-[1rem] lg:top-[9rem] left-[5rem] lg:left-[9rem]"}
								hover={"lg:hover:top-[7rem]"}
								z={"z-40"}
								img={
									"https://media2.giphy.com/media/7cwxLhg4ovPUOTUyvG/giphy.gif?cid=ecf05e47g2mciqwri3tpqic4ugpy1yl3dz7wt3pbljld5huj&rid=giphy.gif&ct=g"
								}
							/>
						</div>
						<div className="animate-float2 absolute z-30 hover:z-50 duration-150 animation-delay-[3000ms]">
							<TiltVideoCard
								size={"w-[11.5rem] lg:w-[15rem] h-[14rem] lg:h-[18rem]"}
								pos={"top-[5rem] lg:top-[12rem] left-[9rem] lg:left-[18rem]"}
								hover={"lg:hover:top-[10rem] lg:hover:left-[22rem]"}
								z={"z-30"}
								img={
									"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZudzhyb3YzZGJ4ZXRtbXNsb3d6bDVub3RnOGg4aTY3NTR6eTd3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Upal72olGEO4sdOifD/giphy.gif"
								}
							/>
						</div>
						<div className="animate-float absolute z-20 hover:z-50 duration-150 animation-delay-1000">
							<TiltVideoCard
								size={"w-[11rem] lg:w-[16rem] h-[14rem] lg:h-[18rem]"}
								pos={"top-[8rem] lg:top-[18rem] left-[2rem]  lg:left-[6rem]"}
								hover={"hover:top-[16rem] hover:left-[3rem]"}
								z={"z-20"}
								img={
									"https://media0.giphy.com/media/2roTVUF0LFvZwYcCMb/giphy.gif?cid=ecf05e471ng66c3pzio9ku130putg1ga7bw8rovgnfolamgz&rid=giphy.gif&ct=g"
								}
							/>
						</div>
						<div className="animate-float2 absolute z-10 hover:z-50 duration-150">
							<TiltVideoCard
								size={"w-[13rem] lg:w-[20rem] h-[10rem] lg:h-[18rem]"}
								pos={"top-[16rem] lg:top-[24rem] left-[6rem] lg:left-[11rem]"}
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
