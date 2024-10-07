"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
	const pathname = usePathname();

	if (pathname === "/") return <div />;

	return (
		<footer className="flex gap-10 items-start justify-between h-96 pr-10">
			<Image
				src="https://placehold.co/500"
				alt="logo"
				width={1080}
				height={1080}
				className="h-96 w-auto"
			/>
			<div className="flex flex-col w-full">
				<div className="flex w-full justify-between">
					<div className="flex flex-col gap-5">
						<span className="font-semibold">Skins</span>
						<p>012345678</p>
						<p>john@doe.com</p>
					</div>
					<div className="flex flex-col gap-5">
						<span className="font-semibold">Skins</span>
						<span>Apple</span>
						<span>Samsung</span>
						<span>OnePlus</span>
						<span>Asus</span>
					</div>
					<div className="flex flex-col gap-5">
						<span className="font-semibold">Company</span>
						<span>Home</span>
						<span>About</span>
						<span>Services</span>
						<span>Work with us!</span>
					</div>
				</div>
				<hr className="my-10" />
				<p>© 2023 Mobiiwrap. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
