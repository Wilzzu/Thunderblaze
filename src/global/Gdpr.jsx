import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomCard from "../components/gdpr/CustomCard";
import { motion } from "framer-motion";

const Gdpr = () => {
	const [statistics, setStatistics] = useState(false);
	const [preferences, setPreferences] = useState(false);
	const [customize, setCustomize] = useState(false);
	const [cookies, setCookies] = useState(getCookie());
	const [moreInfo, setMoreInfo] = useState(null);
	const location = useLocation();

	// Check which cookies should be enabled
	const handleSave = () => {
		let cookies = { statistics: false, preferences: false };
		if (statistics) cookies["statistics"] = true;
		if (preferences) cookies["preferences"] = true;
		addCookie(cookies);
	};

	// Add new cookie
	function addCookie(value) {
		let date = new Date();
		date.setFullYear(date.getFullYear() + 1);
		document.cookie = `GDPR_CONSENT=${JSON.stringify(
			value
		)}; expires=${date.toGMTString()}; path=/;`;
		setCookies(getCookie());
	}

	// Check if user has already agreed
	function getCookie() {
		let cookie = document.cookie.match(new RegExp("GDPR_CONSENT=([^;]+)"));
		if (cookie) return JSON.parse(cookie[1]);
		else return null;
	}

	// Delete cookies, for future
	function deleteCookie(name) {
		document.cookie = [
			name,
			"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.",
			window.location.host.toString(),
		].join("");
	}

	// Determine if the GDPR bar should be shown or not
	const showGdpr = () => {
		if (cookies !== null || location.pathname == "/privacy") return false;
		return true;
	};

	return (
		<>
			{showGdpr() && (
				<motion.div
					initial={{ y: 200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
					className="fixed md:left-16 bottom-8 md:bottom-16 mx-1 md:mx-0 z-[999] flex md:w-[502px] flex-col items-start justify-center gap-2 md:gap-4 rounded-xl border-2 border-[#b1b1b1] bg-whiteish p-6 md:p-8 text-left font-hanken shadow-lg">
					{customize ? (
						<>
							{/* Customize cookies */}
							<h1 className="text-base md:text-lg font-bold">About Your Privacy</h1>
							<p className="text-sm md:text-base">
								This website stores and accesses information on your device, such as cookies.
								Personal data may be processed, such as cookie identifiers, unique device
								identifiers, and browser information. Third parties may store and access information
								on your device and process this personal data. You may change or withdraw your
								preferences, however, as a consequence you may not see relevant personalized
								content. You may change your settings at any time or accept the default settings.
								“Necessary” cookies are on by default but can be turned off in your browser
								settings.{" "}
								{
									<Link
										to="/privacy"
										className="text-[#1863DC] hover:underline hover:underline-offset-2">
										Privacy Policy
									</Link>
								}
							</p>
							<h2 className="text-sm md:text-base font-bold">Manage Consent Preferences</h2>
							<CustomCard
								moreInfo={moreInfo}
								setMoreInfo={setMoreInfo}
								type={"necessary"}
								title={"Strictly necessary cookies"}
								desc={
									"These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
								}
								disabled={true}
							/>

							<CustomCard
								moreInfo={moreInfo}
								setMoreInfo={setMoreInfo}
								type={"preferences"}
								title={"Preferences"}
								desc={
									"Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you."
								}
								toggleData={preferences}
								toggle={setPreferences}
							/>

							<CustomCard
								moreInfo={moreInfo}
								setMoreInfo={setMoreInfo}
								type={"statistics"}
								title={"Statistics"}
								desc={
									"The performance and effectiveness of content that you see or interact with can be measured."
								}
								toggleData={statistics}
								toggle={setStatistics}
							/>
							<div className="flex w-full justify-between gap-2 font-medium text-[#1863DC] text-sm md:text-base">
								<button className="w-1/3 border-2 border-[#1863DC] py-3" onClick={handleSave}>
									Save & Close
								</button>
								<button
									className="w-1/3 border-2 border-[#1863DC] py-3"
									onClick={() => addCookie({ statistics: false, preferences: false })}>
									Reject All
								</button>
								<button
									className="w-1/3 bg-[#1863DC] py-3 text-white"
									onClick={() => addCookie({ statistics: true, preferences: true })}>
									Accept All
								</button>
							</div>
						</>
					) : (
						<>
							{/* GDPR Popup */}
							<h1 className="text-base md:text-lg font-bold">We value your privacy</h1>
							<p className="text-sm md:text-base">
								We use cookies to enhance your browsing experience, serve personalized content and
								analyze our traffic. By clicking "Accept All" you consent to our use of cookies.
							</p>
							<div className="flex mt-2 md:mt-0 text-sm md:text-base w-full justify-between gap-2 font-medium text-[#1863DC]">
								<button
									className="w-1/3 border-2 border-[#1863DC] py-3"
									onClick={() => setCustomize(true)}>
									Customize
								</button>
								<button
									className="w-1/3 border-2 border-[#1863DC] py-3"
									onClick={() => addCookie({ statistics: false, preferences: false })}>
									Reject All
								</button>
								<button
									className="w-1/3 bg-[#1863DC] py-3 text-white"
									onClick={() => addCookie({ statistics: true, preferences: true })}>
									Accept All
								</button>
							</div>
						</>
					)}
				</motion.div>
			)}
		</>
	);
};

export default Gdpr;
