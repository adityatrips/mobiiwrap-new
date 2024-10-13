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
				window.localStorage.setItem("uid", user.uid);
			} else {
				setUser(null);
				setIsLoggedIn(false);
				window.localStorage.removeItem("uid");
			}
		});
		return unsubscribe;
	}, []);

	const signup = async (name, email, password) => {
		try {
			const newUser = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await setDoc(doc(firestore, "users", newUser.user.uid), {
				uid: newUser.user.uid,
				name,
				email,
				address: "",
			});
			await setDoc(doc(firestore, "cart", newUser.user.uid), {
				items: [],
				totalItems: 0,
				totalPrice: 0,
			});
			await setDoc(doc(firestore, "wishlist", newUser.user.uid), {});
			await setDoc(doc(firestore, "orders", newUser.user.uid), {});

			await updateProfile(newUser.user, {
				displayName: name,
			});
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
