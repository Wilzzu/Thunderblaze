import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useGetLoggedInUser from "../hooks/login/useGetLoggedInUser";
import useGetPrivateVideos from "../hooks/videos/useGetPrivateVideos";
import useGetPublicVideos from "../hooks/videos/useGetPublicVideos";
import PrivateVideos from "../components/videos/PrivateVideos";
import PublicVideos from "../components/videos/PublicVideos";
import YTEmbed from "../components/videos/YTEmbed";
import DropdownCategory from "../components/videos/DropdownCategory";
import SortButton from "../components/videos/SortButton";
import { useSupabase } from "../hooks/login/useSupabase";

const Videos = () => {
	const { supabase } = useSupabase();

	// Setting user's session token used for fetching private videos
	const [token, setToken] = useState(null);
	const mainRef = useRef(null);

	// Fetching videos
	const { publicData, publicLoading, publicIsError } = useGetPublicVideos();
	const { privateData, privateLoading, privateIsError, refetchPrivateData, setEnable } =
		useGetPrivateVideos(token);

	// Getting user data
	const loggedUser = useSelector((state) => state.loggedUser.user);
	const demoUser = useSelector((state) => state.demoUser.user);
	const { getUser } = useGetLoggedInUser();
	const [user, setUser] = useState(loggedUser);

	// Get logged user manually
	const getLoggedUser = async (curUser, demo) => {
		setUser(await getUser(curUser, false, demo));
	};

	// useEffect(() => {
	// 	if (!privateData) getLoggedUser();
	// }, []);

	useEffect(() => {
		if (demoUser && Object.keys(demoUser)?.length) getLoggedUser(demoUser, true);
		else if (loggedUser) getLoggedUser(loggedUser, false);
	}, [loggedUser, demoUser]);

	// Get logged in user's session token
	const getUserSession = async () => {
		if (demoUser && Object.keys(demoUser).length > 1) return setToken("demo");
		const { data } = await supabase.auth.getSession();
		if (data) setToken(data.session.access_token);
	};

	useEffect(() => {
		if (!privateData && Object.keys(user).length > 1) getUserSession();
	}, [user]);

	// After getting user session token call private videos API
	useEffect(() => {
		if (token) {
			setEnable(true);
			refetchPrivateData();
		}
	}, [token]);

	const [sort, setSort] = useState("dateDesc");
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [showPriv, setShowPriv] = useState(true);
	const [showPub, setShowPub] = useState(true);

	// Scroll to top when video is selected
	useEffect(() => {
		const scrollEl = document.getElementsByClassName("simplebar-content-wrapper")[0];
		if (!scrollEl || !selectedVideo) return;
		scrollEl.scrollTo({ top: 0, behavior: "smooth" });
	}, [selectedVideo]);

	return (
		<div ref={mainRef} className="min-h-screen bg-[#0F0F0F] text-whiteish">
			<div className="centerDiv max-w-[1280px] px-8 pt-10 pb-40">
				{/* Player */}
				{selectedVideo && <YTEmbed video={selectedVideo} />}
				{/* Sorting */}
				<p className="mt-2 mb-2 text-left font-hanken text-sm font-light opacity-70">Sort</p>
				<div className="mb-4 flex gap-2 font-hanken">
					<SortButton
						sort={sort}
						setSort={setSort}
						type={"date"}
						typeLocalized={["Most recent", "Oldest"]}
					/>
					<SortButton
						sort={sort}
						setSort={setSort}
						type={"views"}
						typeLocalized={["Most views", "Least views"]}
					/>
				</div>
				{/* All videos container */}
				<div className="flex flex-col gap-8">
					{/* Private videos */}
					<div>
						<DropdownCategory toggle={setShowPriv} value={showPriv} title={"Private videos"} />
						{showPriv && (
							<div className="min-h-[185px]">
								<PrivateVideos
									data={privateData}
									loading={privateLoading}
									error={privateIsError}
									user={user}
									sort={sort}
									setSelectedVideo={setSelectedVideo}
								/>
							</div>
						)}
					</div>
					{/* Public videos */}
					<div>
						<DropdownCategory toggle={setShowPub} value={showPub} title={"Public videos"} />

						{showPub && (
							<PublicVideos
								data={publicData}
								loading={publicLoading}
								error={publicIsError}
								sort={sort}
								setSelectedVideo={setSelectedVideo}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Videos;
