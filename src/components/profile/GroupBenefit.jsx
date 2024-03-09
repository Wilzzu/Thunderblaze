import SuccessCheckmark from "../../assets/SuccessCheckmark";

const GroupBenefit = ({ content, delay }) => {
	return (
		<ul className="flex items-center">
			<div className="w-8 h-8">
				<SuccessCheckmark color="#FFD037" circle={false} delay={delay} />
			</div>
			<p>{content}</p>
		</ul>
	);
};

export default GroupBenefit;
