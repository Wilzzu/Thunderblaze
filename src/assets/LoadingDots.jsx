const LoadingDots = (props) => (
	<svg width={24} height={24} fill={props.color} xmlns="http://www.w3.org/2000/svg">
		<style>
			{
				"@keyframes spinner_MGfb{93.75%,to{opacity:.2}}.spinner_S1WN{animation:spinner_MGfb .8s linear infinite;animation-delay:-.8s}"
			}
		</style>
		<circle className="spinner_S1WN" cx={4} cy={12} r={3} />
		<circle
			className="spinner_S1WN"
			cx={12}
			cy={12}
			r={3}
			style={{
				animationDelay: "-.65s",
			}}
		/>
		<circle
			className="spinner_S1WN"
			cx={20}
			cy={12}
			r={3}
			style={{
				animationDelay: "-.5s",
			}}
		/>
	</svg>
);

export default LoadingDots;
