import "./App.css";
// Packages
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import SimpleBar from "simplebar-react";
import "./scrollbar.css";

// Pages
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import ErrorPage from "./pages/ErrorPage";
import Videos from "./pages/Videos";
import { store } from "./store";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LogInPage";
import ScrollToTop from "./hooks/useScrollToTop";
import Gdpr from "./global/Gdpr";
import Privacy from "./pages/Privacy";
import Stats from "./pages/Stats";
import Timeouts from "./pages/stats/Timeouts";
import Messages from "./pages/stats/Messages";
import Debts from "./pages/stats/Debts";

function App() {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/videos" element={<Videos />} />
				<Route path="/feedback" element={<Feedback />} />
				<Route path="/stats" element={<Stats />} />
				<Route path="/stats/timeouts" element={<Timeouts />} />
				<Route path="/stats/messages" element={<Messages />} />
				<Route path="/stats/debts" element={<Debts />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		)
	);

	// Main return
	return (
		<div className="App">
			<Provider store={store}>
				<QueryClientProvider client={client}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</Provider>
		</div>
	);
}

// Root
const Root = () => {
	return (
		<>
			<ScrollToTop />
			<SimpleBar
				style={{ maxHeight: "100vh" }}
				forceVisible="y"
				autoHide={window.innerWidth > 1024 ? false : true}>
				<Gdpr />
				<Navbar />
				<div>
					<Outlet /> {/* Other content */}
				</div>
				<Footer />
			</SimpleBar>
		</>
	);
};

export default App;
