import { Link } from "react-router-dom";

const OtherApps = () => {
	return (
		<div className="relative">
			{/* Spacer */}
			<div className="waveSpacer waveAspect2 wave2 mt-12" />
			{/* Main block */}
			<div className="flex h-[1050px] flex-col items-center justify-center gap-24 bg-blackish px-[100px] pb-28 text-white">
				<h1 className="font-poppins text-6xl font-black text-lime">MUUT SOVELLUKSET</h1>
				<div className="mb-12 flex items-center justify-center gap-28">
					<Link to="/stats" className="group duration-200 hover:scale-105">
						<h1 className="mb-7 font-poppins text-4xl font-bold">Statistics</h1>
						<div className="flex h-[25rem] w-[17rem] flex-col items-center justify-center gap-4 rounded-[2.5rem] border-4 border-lime bg-blackish group-hover:bg-lime">
							<p className="px-6 pb-5 font-semibold text-white group-hover:text-blackish">
								Statistics of all Thunderblaze members.
							</p>
						</div>
					</Link>
				</div>
			</div>
			{/* Spacer */}
			<div className="cutSpacer cutAspect2 cut2 absolute bottom-[3.75rem] mb-[-3.75rem]" />
		</div>
	);
};

export default OtherApps;
