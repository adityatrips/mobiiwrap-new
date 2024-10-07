"use client";

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme === "dark") {
			document.querySelector("body").classList.add("dark");
		} else {
			document.querySelector("body").classList.remove("dark");
		}
	}, [theme]);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) setTheme(savedTheme);
		localStorage.setItem("theme", theme);
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
