"use client";

import { createContext, useContext, useEffect, useState } from "react";

const BrandContext = createContext();

const BrandProvider = ({ children }) => {
	return (
		<BrandContext.Provider
			value={{
				allBrands: [],
				getBrand: [],
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
