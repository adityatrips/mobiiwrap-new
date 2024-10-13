"use client";

import { mobiles } from "@/app/models";
import { useBrand } from "@/context/BrandContext";
import {
	Button,
	CircularProgress,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { IndianRupee, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OneProductPage = ({ params }) => {
	const [brand] = useState([params.brand]);
	const [model] = useState([params.model]);
	const router = useRouter();
	const [models, setModels] = useState(null);

	useEffect(() => {
		const fetchBrand = async () => {
			const tmp = await getBrand(params.brand);
			setModels(Object.values(tmp));
		};
		fetchBrand();
	}, []);

	const { allBrands, getBrand } = useBrand();
	console.log(`allBrands`, allBrands);

	return models === null ? (
		<div className="flex justify-center items-center h-nav-full">
			<CircularProgress />
		</div>
	) : (
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
					{brand[0].toUpperCase()}
				</p>
				<h2 className="mt-0 pt-0">
					{model[0].replaceAll("_", " ").toUpperCase()}
				</h2>
				<span className="text-primary">{params.model}</span>

				<div className="flex items-start">
					<span>₹</span>
					<span className="flex items-end">
						<span className="text-4xl">499</span>
						<span>00</span>
					</span>
				</div>

				<Select
					label="Select a brand"
					selectionMode="single"
					defaultSelectedKeys={brand}
					onSelectionChange={(e) => {
						router.push(`/products/${e.currentKey}`);
					}}
				>
					{allBrands.map((product) => {
						return (
							<SelectItem key={product} value={product}>
								{product.toUpperCase()}
							</SelectItem>
						);
					})}
				</Select>

				{brand != [] && (
					<Select
						selectedKeys={model}
						selectionMode="single"
						label="Select a model"
						defaultSelectedKeys={model}
						onSelectionChange={(e) => {
							router.push(`/products/${brand[0]}/${e.currentKey}`);
						}}
					>
						{models.map((product) => {
							return (
								<SelectItem
									isDisabled={product.id === params.model}
									key={product.id}
									value={product.id}
								>
									{product.name.replaceAll("_", " ").toUpperCase()}
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
