"use client";

import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function NavigationMenu() {
	const [, setIsMenuOpen] = React.useState(false);
	const router = useRouter();
	const { user, logout } = useAuth();

	return (
		<Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle />
				<NavbarBrand>
					<Link href="/">
						<h3 className="text-foreground">MobiiWrap</h3>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden md:flex gap-4" justify="center">
				<NavbarItem>
					<Link href="#">Home</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#">About</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#">Products</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				{user == null ? (
					<>
						<NavbarItem>
							<Link href="/log-in">Login</Link>
						</NavbarItem>
						<NavbarItem>
							<Button onClick={() => router.push("sign-up")} color="primary">
								Signup
							</Button>
						</NavbarItem>
					</>
				) : (
					<Dropdown>
						<DropdownTrigger>
							<Button variant="bordered">{user.displayName}</Button>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem>Profile</DropdownItem>
							<DropdownItem
								onClick={logout}
								className="text-danger"
								color="danger"
							>
								Logout
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				)}
			</NavbarContent>

			<NavbarMenu>
				<NavbarMenuItem>
					<Link href="#">Home</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href="#">About</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link href="#">Products</Link>
				</NavbarMenuItem>
				{user == null ? (
					<>
						<NavbarMenuItem>
							<Link href="/log-in">Login</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Button onClick={() => router.push("sign-up")} color="primary">
								Signup
							</Button>
						</NavbarMenuItem>
					</>
				) : (
					<Dropdown>
						<DropdownTrigger>
							<Button variant="bordered">{user.displayName}</Button>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem>Profile</DropdownItem>
							<DropdownItem
								onClick={logout}
								className="text-danger"
								color="danger"
							>
								Logout
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				)}
			</NavbarMenu>
		</Navbar>
	);
}
