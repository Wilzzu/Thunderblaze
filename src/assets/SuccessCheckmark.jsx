import { motion } from "framer-motion";

const SuccessCheckmark = ({ color = "#43E547", circle = true, delay = 0.3 }) => {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width={"100%"}
			height={"100%"}
			viewBox="0 0 320 320">
			<g
				style={{
					strokeWidth: 7,
					stroke: color,
					strokeLinecap: "round",
					fill: "none",
				}}>
				{circle && (
					<>
						<circle
							cx={160}
							cy={160}
							r={160}
							style={{
								stroke: "none",
							}}
							stroke="none"
						/>
						<motion.circle
							animate={{ pathLength: 1, opacity: 1 }}
							initial={{ pathLength: 0, opacity: 0, rotate: -90 }}
							transition={{ type: "spring", duration: 1.5, bounce: 0 }}
							cx={160}
							cy={160}
							r={156.5}
							style={{
								fill: "none",
							}}
						/>
					</>
				)}
			</g>
			<motion.path
				animate={{ pathLength: 1, opacity: 1 }}
				initial={{ pathLength: 0, opacity: 0 }}
				transition={{
					pathLength: { delay: delay, type: "spring", duration: 1.5, bounce: 0 },
					opacity: { delay: delay, duration: 0.1 },
				}}
				d="m827.412 512.127 37.631 37.631 98.661-102.28"
				transform="translate(-735.717 -335.002)"
				style={{
					strokeLinejoin: "round",
					strokeWidth: 32,
					stroke: color,
					strokeLinecap: "round",
					fill: "none",
				}}
			/>
		</motion.svg>
	);
};

export default SuccessCheckmark;
