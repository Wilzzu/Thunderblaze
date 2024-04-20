import Popup from "reactjs-popup";
import useHandleLogout from "../../hooks/login/useHandleLogout";
import { MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

const item = {
	open: { y: 0, opacity: 1, transition: { y: { type: "spring", stiffness: 35, velocity: -100 } } },
	closed: { y: 20, opacity: 0 },
};

const LogoutButton = () => {
	const { logoutHandler } = useHandleLogout();
	return (
		<Popup
			trigger={
				<motion.button
					variants={item}
					className="flex items-center w-full px-6 gap-4 py-4 hover:font-semibold">
					<MdLogout className="w-auto h-7 fill-red-500" />
					<h1 className="text-lg font-poppins text-left text-red-500">Log out</h1>
				</motion.button>
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
								onClick={logoutHandler}>
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
	);
};

export default LogoutButton;
