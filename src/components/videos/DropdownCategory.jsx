import dropdownArrow from "../../assets/dropdownArrow.svg";

const DropdownCategory = (props) => {
	return (
		<div
			onClick={() => props.toggle(!props.value)}
			className="mb-5 flex h-12 select-none items-center justify-start gap-3 border-b-2 border-whiteish border-opacity-20 px-4 hover:cursor-pointer">
			<p className="font-hanken">{props.title}</p>
			<img
				src={dropdownArrow}
				alt=""
				className={"w-4 duration-300 " + (props.value ? "rotate-180" : "")}
			/>
		</div>
	);
};

export default DropdownCategory;
