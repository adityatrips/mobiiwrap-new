"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("/api/products", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await res.json();
				setProducts(data);
			} catch (error) {
				console.error(error);
			}
		};
		if (products === null) {
			fetchProducts();
		}
	}, []);

	return (
		<ProductContext.Provider
			value={{
				products,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

const useProducts = () => {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error("useProducts must be used within a ProductProvider");
	}
	return useContext(ProductContext);
};

export { ProductProvider, useProducts };
