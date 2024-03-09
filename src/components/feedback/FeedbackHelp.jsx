const FeedbackHelp = (props) => {
	return (
		<div className="relative h-64 w-full">
			<h1 className="absolute top-[-10px] left-[-10px] z-10 text-7xl font-bold shadow-blackishDarkest text-shadow">
				{props.num}
			</h1>
			<div className="h-full overflow-hidden rounded-3xl">
				<img className="h-2/3 w-full object-cover opacity-50" src={props.img} alt="" />
				<div className="flex h-1/3 flex-col items-start justify-center bg-blackishLight px-6 text-left">
					<h1 className="text-xl">{props.title}</h1>
					<p className="text-sm opacity-60">{props.text}</p>
				</div>
			</div>
		</div>
	);
};

export default FeedbackHelp;
