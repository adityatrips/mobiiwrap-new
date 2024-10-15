"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
	// const [cart, setCart] = useState(null);
	// let uid;

	// useEffect(() => {
	// 	uid = localStorage.getItem("uid");
	// 	getCartItems();
	// }, []);

	// const getCartItems = async () => {
	// 	const cartItems = await getDoc(doc(firestore, "cart", uid));
	// 	let d = cartItems.data().items;
	// 	setCart(d);
	// 	return d;
	// };

	// const addItemToCart = async (brand, model, quantity, price) => {
	// 	const cartItems = await getCartItems();

	// 	updateDoc(
	// 		doc(firestore, "cart", uid),
	// 		{
	// 			items: [
	// 				...cartItems,
	// 				{
	// 					brand,
	// 					model,
	// 					quantity,
	// 					reference: doc(firestore, "products", `${brand}_${model}`),
	// 				},
	// 			],
	// 			totalItems: increment(quantity),
	// 			totalPrice: increment(price * quantity),
	// 		},
	// 		{ merge: true }
	// 	);
	// };

	// useEffect(() => {
	// 	getCartItems();
	// 	addItemToCart("nothing", "phone_1", 2, 499);
	// }, []);

	return (
		<CartContext.Provider value={{ cart: [] }}>{children}</CartContext.Provider>
	);
};

const useCart = () => {
	if (CartContext === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return useContext(CartContext);
};

export { CartProvider, useCart };
