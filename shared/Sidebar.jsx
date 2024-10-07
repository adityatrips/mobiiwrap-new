"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthContext } from "@/context/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useState } from "react";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const { user, loggedIn, login, logout } = useContext(AuthContext);
	const { toggleTheme, theme } = useContext(ThemeContext);
	const router = useRouter();

	return (
		<div className="pb-24">
			<nav className="bg-background fixed top-0 left-0 right-0 h-24 flex items-center justify-between px-10 z-20">
				<button onClick={() => setIsOpen((prev) => !prev)}>
					<MenuIcon className="cursor-pointer" />
				</button>

				<h1 className="text-grad text-4xl font-[900]">MW</h1>

				{loggedIn ? (
					<div className="flex items-center gap-5">
						<ShoppingCart
							className="cursor-pointer"
							onClick={() => setIsCartOpen((prev) => !prev)}
						/>
						{theme === "light" ? (
							<Button variant="outline" onClick={toggleTheme}>
								<Moon />
							</Button>
						) : (
							<Button variant="outline" onClick={toggleTheme}>
								<Sun />
							</Button>
						)}
						<DropdownMenu modal={true}>
							<DropdownMenuTrigger>
								<Avatar>
									<AvatarFallback>
										{user?.name.charAt(0) + user?.name.split(" ")[1].charAt(0)}
									</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				) : (
					<div />
				)}
			</nav>

			<div
				onClick={() => {
					setIsOpen(false);
					setIsCartOpen(false);
				}}
				className={`transition-all duration-200 fixed w-screen h-screen bg-[rgba(0,0,0,0.5)] ${
					isOpen || isCartOpen ? "opacity-100 z-[99]" : "-z-10 opacity-0"
				}`}
			/>

			<aside
				className={`${
					isOpen ? "left-0" : "left-[-100%]"
				} transition-all duration-200 w-[min(50%,30rem)] fixed top-0 left-0 h-screen bg-background z-[100]`}
			>
				<nav className="flex flex-col items-center justify-center h-full px-2 gap-2">
					<Link
						className="w-full text-center hover:bg-secondary py-2 rounded transition-colors duration-100"
						href="/"
					>
						Home
					</Link>
					<Link
						className="w-full text-center hover:bg-secondary py-2 rounded transition-colors duration-100"
						href="/about"
					>
						About
					</Link>
					<Link
						className="w-full text-center hover:bg-secondary py-2 rounded transition-colors duration-100"
						href="/products"
					>
						Products
					</Link>
				</nav>
			</aside>

			<aside
				className={`${
					isCartOpen ? "right-0" : "right-[-100%]"
				} p-5 transition-all duration-200 w-[min(50%,30rem)] fixed top-0 right-0 h-screen bg-background z-[100] gap-2 flex flex-col overflow-y-auto`}
			>
				<div className="h-full flex flex-col items-stretch justify-between">
					<div className="flex flex-col gap-5">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="rounded border items-center justify-between flex gap-2 px-5 py-3"
							>
								<Image
									src="https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.medium.jpg"
									alt="iphone"
									width={100}
									height={100}
									className="rounded"
								/>
								<div className="flex flex-col">
									<span className="text-2xl">iPhone 16</span>
									<span className="text-xl font-bold">₹ 399</span>
								</div>
							</div>
						))}
					</div>
					<div className="pb-5">
						<p className="text-xl w-full flex justify-between">
							<span className="font-bold">Total</span>
							<span className="font-bold">₹ 1197</span>
						</p>
						<Button className="w-full">Checkout</Button>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
