"use client";

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		if (theme === "light") {
			if (document.querySelector("body").classList.contains("dark")) {
				document.querySelector("body").classList.remove("dark");
			}
		} else {
			document.querySelector("body").classList.add("dark");
		}
	}, [theme]);

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			if (document.querySelector("body").classList.contains("dark")) {
				document.querySelector("body").classList.remove("dark");
			}
			return;
		} else {
			setTheme("dark");
			document.querySelector("body").classList.add("dark");
			return;
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
