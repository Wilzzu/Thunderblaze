// https://stackoverflow.com/a/45323523/13544771
import { useState, useEffect, useRef } from "react";

export default function useClickOutsideUp(initialIsVisible) {
	const [isClickOnComponent, setIsClickOnComponent] = useState(initialIsVisible);
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsClickOnComponent(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mouseup", handleClickOutside, true);
		return () => {
			document.removeEventListener("mouseup", handleClickOutside, true);
		};
	}, []);

	return { ref, isClickOnComponent, setIsClickOnComponent };
}
