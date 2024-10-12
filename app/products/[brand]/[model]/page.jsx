"use client";

import { mobiles } from "@/app/models";
import { Button, Select, SelectItem, Badge } from "@nextui-org/react";
import { IndianRupee, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const OneProductPage = ({ params }) => {
	const [brand, setBrand] = useState(params.brand);
	const [model, setModel] = useState(params.model);

	useEffect(() => {
		setBrand(params.brand);
		setModel(params.model);
	}, []);

	return (
		<div className="flex flex-col md:flex-row gap-4 container justify-between items-center mx-auto">
			<Image
				src={"/apple/iphone.webp"}
				alt={"Apple iPhone"}
				width={500}
				height={500}
				className="h-auto w-full md:w-2/6 rounded-lg object-cover"
			/>
			<div className="flex flex-col w-full md:w-4/6 justify-start gap-2">
				<p className="text-sm text-primary my-0 py-0 font-[900] tracking-widest">
					{brand.toUpperCase()}
				</p>
				<h2 className="mt-0 pt-0">
					{model.replaceAll("_", " ").toUpperCase()}
				</h2>
				<span className="text-primary">{params.id}</span>

				<div className="flex items-start">
					<span>₹</span>
					<span className="flex items-end">
						<span className="text-4xl">499</span>
						<span>00</span>
					</span>
				</div>

				<Select
					defaultSelectedKeys={[brand]}
					label="Select a brand"
					onChange={(e) => {
						setBrand(e.target.value);
					}}
				>
					{Object.keys(mobiles).map((product) => {
						return (
							<SelectItem key={product} value={product}>
								{product.toUpperCase()}
							</SelectItem>
						);
					})}
				</Select>

				{brand != "" && (
					<Select
						defaultSelectedKeys={[model]}
						label="Select a model"
						onChange={(e) => {
							setModel(e.target.value);
						}}
					>
						{mobiles[brand].map((product) => {
							return (
								<SelectItem key={product} value={product}>
									{product.replaceAll("_", " ").toUpperCase()}
								</SelectItem>
							);
						})}
					</Select>
				)}

				<div className="flex gap-4 w-full">
					<Button
						variant="shadow"
						color="primary"
						className="flex w-full justify-between"
					>
						Buy Now
						<IndianRupee />
					</Button>
					<Button className="flex w-full justify-between">
						Add to cart <ShoppingCart />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default OneProductPage;
