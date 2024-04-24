import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Stats = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("./timeouts");
	}, []);

	return <div className="h-dvh">Loading...</div>;
};

export default Stats;
