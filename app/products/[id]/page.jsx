"use client";

import { mobiles } from "@/app/models";
import { firestore } from "@/config/firebase";
import {
	Badge,
	Button,
	CircularProgress,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { doc, getDoc } from "firebase/firestore";
import { IndianRupee, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OneProductPage = ({ params }) => {
	const [brand, setBrand] = useState("");
	const [model, setModel] = useState("");

	return (
		<div className="flex gap-4 container justify-between items-center mx-auto">
			<Image
				src={"/apple/iphone.webp"}
				alt={"Apple iPhone"}
				width={500}
				height={500}
				className="h-auto w-2/6 rounded-lg object-cover"
			/>
			<div className="flex flex-col w-4/6 justify-start gap-2">
				<h1>Apple iPhone</h1>
				<span className="text-primary">{params.id}</span>

				<div className="flex items-start">
					<span>₹</span>
					<span className="flex items-end">
						<span className="text-4xl">499</span>
						<span>00</span>
					</span>
				</div>

				<Select
					label="Select a brand"
					onChange={(e) => {
						console.log(e);
						setBrand(e.target.value);
					}}
				>
					{Object.keys(mobiles).map((product, index) => {
						return <SelectItem key={product}>{product}</SelectItem>;
					})}
				</Select>

				{brand != "" && (
					<Select
						label="Select a model"
						onChange={(e) => setModel(e.target.value)}
					>
						{mobiles[brand].map((product, index) => {
							console.log(product);
							return (
								<SelectItem key={index} value={product}>
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
