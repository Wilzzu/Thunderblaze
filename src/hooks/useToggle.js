import { useState } from "react";

const useToggle = (initialVal = false) => {
	const [state, setState] = useState(initialVal);

	const toggle = () => {
		setState((boolean) => !boolean);
	};

	const setToggleState = (bool = false) => {
		setState(bool);
	};

	return [state, toggle, setToggleState];
};

export default useToggle;
