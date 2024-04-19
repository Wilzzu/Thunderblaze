import useSocialLogin from "../../hooks/login/useSocialLogin";
import Popup from "reactjs-popup";

const SocialCard = (props) => {
	const handleLinkUser = () => {
		useSocialLogin(props.user, props.social).login();
	};

	const handleUnlinkUser = () => {
		useSocialLogin(props.user, props.social).logout();
	};
	return (
		<>
			{props.linked ? (
				<div className="flex h-14 w-full items-center justify-between rounded-xl border-2 border-greenish bg-[#41ff412a] px-4 text-whiteish">
					<div className="flex items-center gap-1">
						<div className={props.style}>{props.icon}</div>
						<h1 className="font-poppins text-sm font-semibold">{props.linked.name}</h1>
					</div>
					<Popup
						trigger={
							<button className="h-10 w-24 font-poppins text-sm font-normal text-white opacity-70 shadow-[#00000075] duration-150 hover:scale-105 hover:underline hover:underline-offset-[3px] hover:opacity-100">
								Remove
							</button>
						}
						modal>
						{(close) => (
							<div className="relative flex items-center justify-center">
								<div onClick={close} className="absolute h-[100vh] w-[100vw] bg-[#00000071]"></div>
								<div className="absolute p-8 px-20 text-nowrap flex flex-col items-center justify-center gap-8 rounded-bigger bg-gradient-to-b from-[#161616] to-[#1f1f1f]">
									<h1 className="font-hanken text-lg text-white">
										Are you sure you want to remove linked{" "}
										{props.social.charAt(0).toUpperCase() + props.social.slice(1)} account?
									</h1>
									<div className="flex items-center justify-center gap-4">
										<button
											className="p-4 px-10 rounded-xl bg-red-600 font-hanken text-base font-medium text-whiteish duration-150 hover:scale-105 hover:shadow-custom2 hover:shadow-[#c72e2e]"
											onClick={handleUnlinkUser}>
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
			) : (
				<div className="flex h-14 w-full items-center justify-between rounded-xl border-2 border-blackish bg-blackish px-4 text-whiteish">
					<div className="flex items-center gap-1">
						<div className={props.style}>{props.icon}</div>
						<h1 className="font-poppins text-sm font-semibold">{props.name}</h1>
					</div>
					<button
						onClick={handleLinkUser}
						disabled={props.user?.demo}
						className="h-10 w-24 rounded-xl border-2 border-[#53FF4D] font-poppins text-sm font-semibold text-[#53FF4D] opacity-90 shadow-[#00000075] duration-150 text-shadow disabled:opacity-20 hover:bg-[#53ff4d50] hover:text-whiteish hover:opacity-100 disabled:hover:bg-transparent disabled:hover:text-[#53FF4D] disabled:hover:opacity-20">
						Connect
					</button>
				</div>
			)}
		</>
	);
};

export default SocialCard;
