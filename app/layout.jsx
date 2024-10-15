import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavigationMenu from "@/shared/NavigationMenu";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
	title: "MobiiWrap",
	description:
		"Experience top-quality wrapping services for mobile phones, earphones, and more at Mobiiwrap. Discover customizable skins that add style, protection, and personality to your devices.",
	authors: [
		{
			name: "Aditya Tripathi",
			url: "https://www.linkedin.com/in/aditya-tripathi-at04/",
		},
		{
			name: "Ayush Verma",
			url: "https://www.linkedin.com/in/ayush-verma-/",
		},
	],
	favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={"antialiased dark bg-background text-foreground"}>
				<NextUIProvider className="min-h-screen">
					<AuthProvider>
						<CartProvider>
							<NavigationMenu />
							<main className="px-5 pb-5">{children}</main>
						</CartProvider>
					</AuthProvider>
				</NextUIProvider>
			</body>
		</html>
	);
}
