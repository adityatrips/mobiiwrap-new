"use client";

import { firestore } from "@/config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const BrandContext = createContext();

const BrandProvider = ({ children }) => {
	const [allBrands, setAllBrands] = useState(null);

	const getAllBrands = async () => {
		const brands = await getDocs(collection(firestore, "products"));
		const brandList = [];
		brands.forEach((brand) => {
			brandList.push(brand.id);
		});
		setAllBrands(brandList);
	};

	const getBrand = async (brandName) => {
		const brands = await getDoc(doc(firestore, "products", brandName));
		return brands.data();
	};

	useEffect(() => {
		getAllBrands();
	}, []);

	return (
		<BrandContext.Provider
			value={{
				allBrands,
				getBrand,
			}}
		>
			{children}
		</BrandContext.Provider>
	);
};

const useBrand = () => {
	const context = useContext(BrandContext);
	if (!context) {
		throw new Error("useBrand must be used within a BrandProvider");
	}
	return useContext(BrandContext);
};

export { BrandProvider, useBrand };
