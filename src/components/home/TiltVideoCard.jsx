import Tilt from "react-parallax-tilt";
import { useState } from "react";
import { Link } from "react-router-dom";

const TiltVideoCard = (props) => {
	const [zaxis, setZaxis] = useState(false);

	const onEnter = () => {
		setZaxis(true);
	};
	const onLeave = () => {
		setZaxis(false);
	};

	return (
		<Link to={"/videos"}>
			<Tilt
				// tiltReverse={true}
				tiltAngleXInitial={15}
				tiltAngleYInitial={20}
				tiltMaxAngleX={15}
				tiltMaxAngleY={20}
				// transitionSpeed={2000}
				transitionSpeed={500}
				transitionEasing={"cubic-bezier(.13,.68,.49,.99)"}
				scale={1.12}
				onEnter={onEnter}
				onLeave={onLeave}
				className={
					`absolute shadow-2xl rounded-xl overflow-hidden duration-300 ${props.size} ${props.pos} ${props.hover} ` +
					(zaxis ? "z-[99]" : `${props.z}`)
				}>
				<div className="w-full h-full relative">
					<div className="absolute w-full h-full shadow-[inset_0_-4px_40px_rgba(0,0,0,0.6)] shadow-[#00000048] hover:shadow-transparent duration-300 rounded-xl" />
					<img src={props.img} alt="" className="object-cover w-full h-full absolute z-[-99]" />
				</div>
			</Tilt>
		</Link>
	);
};

export default TiltVideoCard;
