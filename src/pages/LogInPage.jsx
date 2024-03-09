import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAddNewUser from "../hooks/login/useAddNewUser";

const LoginPage = () => {
	const [isLoading, isError, errorText, addUser] = useAddNewUser();

	// When user arrives from external login page save their data
	useEffect(() => {
		addUser();
	}, []);

	return (
		<div className="flex h-[100vh] items-start justify-center bg-blackish pt-52">
			{isError ? (
				<div className="flex flex-col gap-3 font-hanken text-white">
					<div className="flex justify-center font-hanken">
						<div className="py-2 px-5 border-4 border-red-600 rounded-xl">
							<p className="text-xl">An error occurred.</p>
						</div>
					</div>
					<Link
						to="/"
						className="duration-150 hover:cursor-pointer hover:underline hover:underline-offset-2">
						Back to home
					</Link>
				</div>
			) : (
				<div className="font-hanken text-xl text-white">
					{isLoading ? (
						<h1 className="opacity-50">Loading...</h1>
					) : (
						<div className="flex flex-col gap-3">
							<h1 className="opacity-50">Profile data loaded!</h1>
							<p className="text-sm">
								If you are not redirected in a few seconds,{" "}
								<Link
									to="/profile"
									className="underline underline-offset-2 duration-150 hover:cursor-pointer">
									click here to continue.
								</Link>
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default LoginPage;
