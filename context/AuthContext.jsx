"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import toast from "react-hot-toast";

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
			console.log(data);
			setIsLoggedIn(true);
			toast.success("Welcome back!");
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

			toast.success("Registration successful!");
		} catch (error) {
			toast.error("An error occurred. Please try again.");
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			localStorage.removeItem("token");
			setUser(null);
			setIsLoggedIn(false);
			toast.success("Logged out successfully!");
			router.push("/");
		} catch (error) {
			toast.error("An error occurred. Please try again.");
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
			toast.error("An error occurred. Please try again.");
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
