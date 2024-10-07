"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const OneProductPage = ({ params }) => {
	const [title] = useState(params.id.replaceAll("-", " "));
	const [variant, setVariant] = useState(null);
	const [brand, setBrand] = useState(null);
	const [quantity, setQuantity] = useState(1);

	return (
		<section className="flex items-center justify-between gap-5">
			<Image
				className="mx-auto max-w-96 w-1/2 h-auto rounded flex-[0.4]"
				src="/iphonex.png"
				alt={params.id}
				width={400}
				height={400}
			/>

			<div className="flex flex-col flex-[0.5] gap-5">
				<h1 className="text-2xl font-[900]">iPhone {title}</h1>
				<p className="flex items-end gap-2">
					<span className="text-4xl">₹ 399</span>
					<span className="line-through">₹ 499</span>
				</p>
				<div className="flex flex-col gap-2">
					<span className="text-xl font-[600]">Brand:</span>
					<Select
						value={brand}
						onValueChange={(e) => {
							setBrand(e);
						}}
					>
						<SelectTrigger>
							<SelectValue>{brand ?? "Select a brand"}</SelectValue>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value={"Apple"}>Apple</SelectItem>
								<SelectItem value={"Samsung"}>Samsung</SelectItem>
								<SelectItem value={"OnePlus"}>OnePlus</SelectItem>
								<SelectItem value={"Asus"}>Asus</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-xl font-[600]">Model:</span>
					<Select
						value={variant}
						onValueChange={(e) => {
							setVariant(e);
						}}
					>
						<SelectTrigger>
							<SelectValue>{variant ?? "Select a brand"}</SelectValue>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value={"Model1"}>Model 1</SelectItem>
								<SelectItem value={"Model2"}>Model 2</SelectItem>
								<SelectItem value={"Model3"}>Model 3</SelectItem>
								<SelectItem value={"Model4"}>Model 4</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className="flex w-fit items-center border rounded">
					<Button
						onClick={() => {
							setQuantity((prev) => prev + 1);
						}}
						className="rounded-none border-r"
						variant="ghost"
					>
						+
					</Button>
					<div className="w-full px-10 text-center">{quantity}</div>
					<Button
						onClick={() => {
							if (quantity <= 1) return;
							setQuantity((prev) => prev - 1);
						}}
						className="rounded-none border-l"
						variant="ghost"
					>
						-
					</Button>
				</div>

				<div className="flex gap-2">
					<Button>Buy Now</Button>
					<Button variant="outline">Add to Cart</Button>
				</div>
			</div>
		</section>
	);
};

export default OneProductPage;
