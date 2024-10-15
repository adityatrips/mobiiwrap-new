import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavigationMenu from "@/shared/NavigationMenu";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { ProductProvider } from "@/context/ProductContext";

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
						<ProductProvider>
							<CartProvider>
								<NavigationMenu />
								<Toaster
									toastOptions={{
										style: {
											backgroundColor: "hsl(var(--nextui-background))",
											color: "hsl(var(--nextui-foreground))",
											border: "1px solid hsl(var(--nextui-default))",
										},
										position: "bottom-right",
									}}
								/>
								<main className="px-5 pb-5">{children}</main>
							</CartProvider>
						</ProductProvider>
					</AuthProvider>
				</NextUIProvider>
			</body>
		</html>
	);
}
