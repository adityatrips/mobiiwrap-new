"use client";

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "sonner";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => login(), []);
	useEffect(() => {
		if (user === null) return;
		toast("Woo Hoo", {
			type: "success",
			description: `Welcome back, ${user?.name}`,
			duration: 2000,
		});
	}, [user]);

	const login = () => {
		setLoggedIn(true);
		setUser({
			name: "John Doe",
			email: "john@doe.com",
			phone: "1234567890",
			address: "123, Main Street, New York",
			gender: "male",
			role: "customer",
		});
	};

	const logout = () => {
		setLoggedIn(false);
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				loggedIn,
				user,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
