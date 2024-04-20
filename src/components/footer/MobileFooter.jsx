import { Link } from "react-router-dom";
import footerImg from "../../assets/logo-256.png";

const MobileFooter = (props) => {
	return (
		<div className="md:hidden flex flex-col items-center justify-center gap-10 bg-whiteish font-poppins pb-6">
			{/* MENU */}
			<img src={footerImg} className="max-w-[120px] w-1/2 pt-10" alt="" />
			{/* Items */}
			<div className="flex justify-center items-center w-full gap-14 px-6">
				<div className="flex flex-col w-full gap-2">
					{props.items.map((e, i) => {
						return (
							<Link
								to={e.path}
								key={i}
								className="px-4 py-4 rounded-md bg-[#f3f3f3] text-lg flex items-center justify-center font-medium">
								{e.name}
							</Link>
						);
					})}
				</div>
			</div>
			{/* Bottom text */}
			<h1 className="font-medium pb-4">
				Made with 💚 by{" "}
				<a
					href="https://github.com/Wilzzu"
					className="font-bold text-[#16C60C] underline-offset-2 duration-150 hover:text-lime hover:underline">
					Wilzzu
				</a>
			</h1>
		</div>
	);
};

export default MobileFooter;
