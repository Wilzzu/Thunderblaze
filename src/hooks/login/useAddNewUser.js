import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import settings from "../../settings.json";
import { addUserInfo } from "../../store";

const supabase = createClient(import.meta.env.VITE_SUPAURL, import.meta.env.VITE_SUPAAPI);

const useAddNewUser = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [errorText, setErrorText] = useState("#bugi");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Try getting login_redirect cookie, if not present send user to their profile
	function getCookie() {
		let cookie = document.cookie.match(new RegExp("LOGIN_REDIRECT=([^;]+)"));
		if (cookie) return cookie[1];
		else return "/profile";
	}

	// First get logged in user's info
	const addUser = async () => {
		setIsLoading(true);
		supabase.auth.getUser().then((value) => {
			if (value.data?.user?.user_metadata) {
				isUserAlreadyInDB(value.data?.user?.user_metadata);
			} else {
				throwError("#supermarsu4332");
			}
		});
	};

	// Check if user is already added to DB
	const isUserAlreadyInDB = async (user) => {
		const { data, error } = await supabase.from("users").select().eq("id", user.provider_id);
		if (error) {
			throwError("#supermarsu1122", error);
		}
		if (data.length) {
			console.log("User already in DB");
			navigate(getCookie());
			setIsLoading(false);
		} else {
			fetchGroupMembers(user);
		}
	};

	// Fetch all group members
	const fetchGroupMembers = async (user) => {
		axios
			.get(`${settings.apiLocation}/discord/members/refresh`)
			.then((res) => addNewUserToDB(user, res.data))
			.catch((err) => {
				throwError("#porava22", err);
			});
	};

	// Add user to DB, also add the groupMember value by using the previously fetched group members
	const addNewUserToDB = async (user, groupMembers) => {
		const { error } = await supabase.from("users").insert({
			id: user.provider_id,
			discord: {
				name: user.name,
				picture: user.picture,
				provider_id: user.provider_id,
				groupMember: groupMembers.some((e) => e.id === user.provider_id),
			},
			website: {
				isModerator: settings.moderators.includes(user.provider_id),
				lastFeedback: null,
			},
		});
		if (error) {
			throwError("#supermarsu3922", error);
		} else {
			const { data, err } = await supabase.from("users").select().eq("id", user.provider_id);
			if (err) {
				throwError("#supermarsu1122", err);
			}
			if (data.length) {
				dispatch(addUserInfo(data[0]));
				navigate(getCookie());
				setIsLoading(false);
			} else {
				throwError("#supermarsu1337", err);
			}
		}
	};

	// Error handling
	const throwError = (errorText, err = "Nothing to log") => {
		setIsError(true);
		setIsLoading(false);
		setErrorText(errorText);
		console.log(err);
	};

	return [isLoading, isError, errorText, addUser];
};

export default useAddNewUser;
