"use client";

import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CircularProgress,
	Input,
} from "@nextui-org/react";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { mobiles } from "../models";

const Products = () => {
	const allBrands = Object.keys(mobiles);

	return allBrands === null ? (
		<div className="flex items-center justify-center h-nav-full">
			<CircularProgress />
		</div>
	) : (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
			{allBrands.map((product) => {
				return (
					<ProductCard
						key={product}
						brand={product}
						img="/apple/iphone.webp"
						price={"499"}
						title={product}
					/>
				);
			})}
		</div>
	);
};

const ProductCard = ({ brand, img, price, title }) => {
	const router = useRouter();

	return (
		<Card
			onPress={() => {
				router.push(`/products/${brand}`);
			}}
			shadow="sm"
			isPressable
		>
			<CardBody className="h-full overflow-visible p-0">
				<Image
					shadow="sm"
					radius="lg"
					height={1000}
					width={1000}
					alt={title}
					className="h-auto w-full aspect-[3/4] object-cover"
					src={img}
				/>
			</CardBody>
			<CardFooter className="text-small justify-between">
				<b>{title.toUpperCase()}</b>
				<p className="text-default-500">From ₹{price}</p>
			</CardFooter>
		</Card>
	);
};

export default Products;
