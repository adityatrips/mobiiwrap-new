"use client";

import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme != null) {
			setTheme(storedTheme);
			document.body.classList.add(storedTheme);
			return;
		}
		setTheme("light");
	}, []);

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
			document.body.classList.remove("dark");
		} else {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
			document.body.classList.add("dark");
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
