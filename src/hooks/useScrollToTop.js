import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		const scrollEl = document.getElementsByClassName("simplebar-content-wrapper")[0];
		if (!scrollEl) return;
		scrollEl.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
