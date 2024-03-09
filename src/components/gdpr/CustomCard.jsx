import checkmarkIcon from "../../assets/checkmarkIcon.svg";

const CustomCard = (props) => {
	return (
		<div className="flex w-full flex-col border-2 border-whiteishDarker px-4">
			<div className="flex h-12 w-full items-center justify-between">
				<div
					className="flex h-full w-full items-center gap-4 hover:cursor-pointer"
					onClick={() =>
						props.moreInfo == props.type ? props.setMoreInfo(null) : props.setMoreInfo(props.type)
					}>
					<h1 className="text-sm md:text-base font-bold">
						{props.moreInfo == props.type ? "-" : "+"}
					</h1>
					<h1 className="text-sm md:text-base font-medium">{props.title}</h1>
				</div>
				{props.disabled ? (
					<button disabled className="flex items-center justify-center gap-2 rounded-md p-2">
						<div className="h-7 w-7 md:h-8 md:w-8 rounded-md bg-[#74cf37] bg-opacity-50 p-2">
							<img src={checkmarkIcon} alt="" />
						</div>
					</button>
				) : (
					<button
						onClick={() => props.toggle(!props.toggleData)}
						className={"flex items-center justify-center gap-2 rounded-md p-2"}>
						<div
							className={
								"h-7 w-7 md:h-8 md:w-8 rounded-md p-2 " +
								(props.toggleData ? "bg-[#74cf37]" : "bg-[#636363]")
							}>
							{props.toggleData && <img src={checkmarkIcon} alt="" />}
						</div>
					</button>
				)}
			</div>
			{props.moreInfo == props.type && (
				<p className="pt-0 md:pt-1 pb-3 text-xs md:text-sm">{props.desc}</p>
			)}
		</div>
	);
};

export default CustomCard;
