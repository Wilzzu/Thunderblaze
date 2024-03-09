import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import homeIcon from "../../assets/homeIcon.svg";

const Navigation = (props) => {
	return (
		<div className="flex w-[400px] flex-col items-center justify-start gap-2 rounded-r-[3rem] rounded-b-[3rem] bg-blackishDark pt-36">
			<Link to="/" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<img src={homeIcon} alt="" className="w-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Home</h1>
				</div>
			</Link>
			<Link to="/videos" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<img src={homeIcon} alt="" className="w-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Videos</h1>
				</div>
			</Link>
			<Link to="/stats" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<img src={homeIcon} alt="" className="w-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Stats</h1>
				</div>
			</Link>
			<Link to="/feedback" className="w-full px-4">
				<div className="flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 duration-150 hover:bg-blackishDarkest">
					<img src={homeIcon} alt="" className="w-7" />
					<h1 className="text-left font-poppins text-2xl font-semibold text-white">Feedback</h1>
				</div>
			</Link>
			<Popup
				trigger={
					<button className="w-full px-4">
						<div className="group flex items-center justify-start gap-4 rounded-3xl py-6 pl-12 opacity-80 duration-150 hover:bg-red-500 hover:opacity-90">
							<img src={homeIcon} alt="" className="w-7" />
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
						<div className="absolute flex h-[35vh] w-[32vw] flex-col items-center justify-center gap-8 rounded-bigger bg-gradient-to-b from-[#161616] to-[#1f1f1f]">
							<h1 className="font-hanken text-lg text-white">Are you sure you want to logout?</h1>
							<div className="flex items-center justify-center gap-4">
								<button
									className="h-[6vh] w-[7vw] rounded-xl bg-red-600 font-hanken text-base font-medium text-whiteish duration-150 hover:scale-105 hover:shadow-custom2 hover:shadow-[#c72e2e]"
									onClick={props.logoutHandler}>
									Yes
								</button>
								<button
									className="h-[6vh] w-[7vw] rounded-xl border-2 border-blackishLight font-hanken text-base font-medium text-[#696969] duration-150 hover:bg-blackishLight hover:text-whiteish hover:shadow-custom2 hover:shadow-[#00000057]"
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
