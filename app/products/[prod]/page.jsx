"use client";

import { Button, Divider, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IndianRupee, ShoppingCart } from "lucide-react";
import CustomLoading from "@/shared/CustomLoading";
import { toTitleCase } from "@/utils/str_fuctions";
import { mobiles } from "@/app/models";

const ProductPage = ({ params: { prod } }) => {
	const [product, setProduct] = useState(null);
	const [brand, setBrand] = useState("apple");
	const [model, setModel] = useState("16_pro");

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await fetch(`/api/products/${prod}`);
			const data = await res.json();
			console.log(data);
			setProduct(data);
		};
		fetchProduct();
	}, []);

	return product === null ? (
		<CustomLoading />
	) : (
		<>
			<div className="flex flex-col md:flex-row gap-4 container justify-between items-center mx-auto">
				<Image
					src={product.image}
					alt={"Apple iPhone"}
					width={500}
					height={500}
					className="h-auto w-full md:w-2/6 rounded-lg object-cover"
				/>
				<div className="flex flex-col w-full md:w-4/6 justify-start gap-2">
					<p className="text-sm text-primary my-0 py-0 font-[900] tracking-widest">
						{product.category}
					</p>
					<h2 className="mt-0 pt-0">
						{toTitleCase(prod.replaceAll("-", " "))}
					</h2>
					<div className="flex items-start">
						<span>₹</span>
						<span className="flex items-end">
							<span className="text-4xl">{product.price}</span>
							<span>00</span>
						</span>
					</div>
					<Select
						label="Select a brand"
						selectionMode="single"
						selectedKeys={[brand]}
						onSelectionChange={(e) => {
							setBrand(e.currentKey);
						}}
					>
						{Object.keys(mobiles).map((product) => {
							return (
								<SelectItem key={product} value={product}>
									{toTitleCase(product)}
								</SelectItem>
							);
						})}
					</Select>

					{brand != "" && (
						<Select
							selectedKeys={[model]}
							selectionMode="single"
							label="Select a model"
							onSelectionChange={(e) => {
								setModel(e.currentKey);
							}}
						>
							{mobiles[brand].map((product) => {
								return (
									<SelectItem key={product} value={product}>
										{toTitleCase(product.replaceAll("_", " "))}
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
			<Divider className="my-5" />
			<h3>You might also like</h3>
		</>
	);
};

export default ProductPage;
