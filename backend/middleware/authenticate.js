const authenticate = async (req, res, next) => {
	// Check for valid session token
	const token = req.headers.authorization?.split(" ")[1];
	if (!token) {
		return res.status(401).json({ message: "Authentication required" });
	}

	// Verify token and retrieve user data
	const { error, user } = await supabase.auth.api.getUser(token);
	if (error || !user) {
		return res.status(401).json({ message: "Invalid token" });
	}

	req.user = user; // Attach user data to request object
	next();
};

module.exports = { authenticate };
