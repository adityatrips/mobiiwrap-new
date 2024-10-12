"use client";

import { auth, firestore } from "@/config/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
				setIsLoggedIn(true);
				router.push("/");
			} else {
				setUser(null);
				setIsLoggedIn(false);
			}
		});
		return unsubscribe;
	}, []);

	const signup = async (name, email, password) => {
		try {
			createUserWithEmailAndPassword(auth, email, password).then(
				async (newUser) => {
					await setDoc(doc(firestore, "users", newUser.user.uid), {
						uid: newUser.user.uid,
						name,
						email,
						cart: [],
						wishlist: [],
						orders: [],
						address: "",
					});
					await updateProfile(newUser.user, {
						displayName: name,
					});
				}
			);
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
			setUser(null);
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	};

	const login = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error(error);
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
