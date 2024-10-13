"use client";

import { useCart } from "@/context/CartContext";
import React from "react";

const CartPage = () => {
	const { cart } = useCart();

	return <div>{JSON.stringify(cart, null, 4)}</div>;
};

export default CartPage;
