"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(null);
	const { user, isLoggedIn } = useAuth();

	useEffect(() => {
		fetchCart();
	}, [isLoggedIn]);

	const fetchCart = async () => {
		if (!isLoggedIn || !user) return;
		const res = await fetch(`/api/cart?user=${user._id}`);
		const data = await res.json();
		setCart(data.cart);
	};

	const addToCart = async (item, quantity, cost) => {
		await fetch("/api/cart", {
			method: "POST",
			body: JSON.stringify({ item, quantity, userId: user._id, cost }),
		});
		toast.success("Added to cart");
		fetchCart();
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, fetchCart }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => {
	if (CartContext === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return useContext(CartContext);
};

export { CartProvider, useCart };
