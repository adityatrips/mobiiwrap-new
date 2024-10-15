"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const data = jwt.decode(token);
			setUser(data);
			setIsLoggedIn(true);
		}
	}, []);

	const signup = async (name, email, password) => {
		try {
			const user = await fetch("/api/auth/register", {
				method: "POST",
				body: JSON.stringify({ name, email, password }),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const json = await user.json();
			console.log(json.token);
			localStorage.setItem("token", json.token);
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			localStorage.removeItem("token");
			setUser(null);
			setIsLoggedIn(false);
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	};

	const login = async (email, password) => {
		try {
			const user = await fetch("/api/auth/login", {
				method: "POST",
				body: JSON.stringify({ email, password }),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const json = await user.json();
			console.log(json.token);
			setIsLoggedIn(true);
			localStorage.setItem("token", json.token);
		} catch (e) {
			console.error(e);
			setIsLoggedIn(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoggedIn,
				login,
				logout,
				signup,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
