import { Link } from "react-router-dom";
import footerImg from "../../assets/logo-256.png";

const LargeFooter = (props) => {
	return (
		<div className="hidden md:flex h-[340px] flex-col items-center justify-center gap-14 bg-whiteish">
			{/* MENU */}
			<div className="mt-10 w-full flex items-center justify-between gap-10 font-poppins font-medium">
				<div className="flex flex-col gap-7 text-right w-full">
					{props.items.map((e, i) => {
						if (i >= 3) return;
						return (
							<div
								key={i}
								className="underline-offset-2 decoration-2 hover:decoration-lime hover:underline">
								<Link to={e.path}>{e.name}</Link>
							</div>
						);
					})}
				</div>
				<img src={footerImg} alt="" className="w-[150px]" />
				<div className="flex flex-col gap-7 text-left w-full">
					{props.items.map((e, i) => {
						if (i <= 2) return;
						return (
							<div
								key={i}
								className="underline-offset-2 decoration-2 hover:decoration-lime hover:underline">
								<Link to={e.path}>{e.name}</Link>
							</div>
						);
					})}
				</div>
			</div>
			{/* Bottom text */}
			<h1 className="font-poppins font-medium">
				Made with 💚 by{" "}
				<a
					href="https://github.com/Wilzzu"
					target="_blank"
					rel="noreferrer"
					className="font-poppins font-bold text-[#16C60C] underline-offset-2 duration-150 hover:text-lime hover:underline">
					Wilzzu
				</a>
			</h1>
		</div>
	);
};

export default LargeFooter;
