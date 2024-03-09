const SortButton = (props) => {
	return (
		<button
			onClick={() =>
				props.sort == props.type + "Desc"
					? props.setSort(props.type + "Asc")
					: props.setSort(props.type + "Desc")
			}
			className={
				"flex h-10 items-center gap-2 rounded-md border-2 border-whiteishDark bg-whiteishDark px-3 duration-150 hover:bg-opacity-100 hover:text-blackishDarkest " +
				(props.sort == props.type + "Desc" || props.sort == props.type + "Asc"
					? "bg-opacity-100 text-blackishDarkest"
					: "bg-opacity-0")
			}>
			{props.sort == props.type + "Asc" ? props.typeLocalized[1] : props.typeLocalized[0]}
		</button>
	);
};

export default SortButton;
