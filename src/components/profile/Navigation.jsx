import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import homeIcon from "../../assets/homeIcon.svg";
import { PiTelevisionBold } from "react-icons/pi";
import { IoIosStats } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

const Navigation = (props) => {
	return (
		<div className="hidden lg:flex w-[400px] flex-col items-center justify-start gap-2 bg-blackishDark pt-36">
			<Link to="/" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<img src={homeIcon} alt="" className="w-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Home</h1>
				</div>
			</Link>
			<Link to="/videos" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<PiTelevisionBold fill="white" className="w-auto h-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Videos</h1>
				</div>
			</Link>
			<Link to="/stats" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<IoIosStats fill="white" className="w-auto h-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Stats</h1>
				</div>
			</Link>
			<Link to="/feedback" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<BiEnvelope fill="white" className="w-auto h-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Feedback</h1>
				</div>
			</Link>
			<Popup
				trigger={
					<button className="w-full px-4">
						<div className="group flex items-center justify-start gap-4 rounded-3xl py-6 pl-12  duration-150 hover:bg-red-500 opacity-90">
							<MdLogout fill="white" className="w-auto h-7" />
							<h1 className="text-left font-poppins text-2xl font-semibold text-red-500 duration-150 group-hover:text-white">
								Logout
							</h1>
						</div>
					</button>
				}
				modal>
				{(close) => (
					<div className="relative flex items-center justify-center">
						<div onClick={close} className="absolute h-[100vh] w-[100vw] bg-[#00000071]"></div>
						<div className="absolute flex flex-col p-10 px-16 items-center justify-center gap-8 rounded-bigger bg-gradient-to-b from-[#161616] to-[#1f1f1f]">
							<h1 className="font-hanken text-lg text-white text-nowrap">
								Are you sure you want to logout?
							</h1>
							<div className="flex items-center justify-center gap-4">
								<button
									className="p-4 px-10 rounded-xl bg-red-600 font-hanken text-base font-medium text-whiteish duration-150 hover:scale-105 hover:shadow-custom2 hover:shadow-[#c72e2e]"
									onClick={props.logoutHandler}>
									Yes
								</button>
								<button
									className="p-4 px-10 rounded-xl border-2 border-blackishLight font-hanken text-base font-medium text-[#696969] duration-150 hover:bg-blackishLight hover:text-whiteish hover:shadow-custom2 hover:shadow-[#00000057]"
									onClick={close}>
									Cancel
								</button>
							</div>
						</div>
					</div>
				)}
			</Popup>
		</div>
	);
};

export default Navigation;
