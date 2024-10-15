"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		if (products == null || products?.length < 1) {
			fetchNProducts(5);
		}
	}, [products?.length]);

	const fetchNProducts = async (n) => {
		setProducts(null);
		try {
			const res = await fetch(`/api/products?qty=${n}`, {
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

	useEffect(() => {
		const fetchProducts = async () => {
			setProducts(null);
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
				setProducts,
				fetchNProducts,
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
