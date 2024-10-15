"use client";

import {
	Card,
	CardBody,
	CardFooter,
	CircularProgress,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { mobiles } from "@/app/models";
import { toTitleCase } from "@/utils/str_fuctions";

const BrandCard = ({ params: { brand } }) => {
	const models = mobiles[brand];

	return models === null ? (
		<div className="flex items-center justify-center h-nav-full">
			<CircularProgress />
		</div>
	) : (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
			{models.map((product) => {
				return (
					<ProductCard
						key={product}
						id={product}
						img={"/apple/iphone.webp"}
						name={toTitleCase(product)}
						price={"499"}
						brand={brand}
					/>
				);
			})}
		</div>
	);
};

const ProductCard = ({ id, img, name, brand, price }) => {
	const router = useRouter();

	return (
		<Card
			onPress={() => {
				router.push(`/products/${brand}/${id}`);
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
					alt={name}
					className="h-auto w-full aspect-[3/4] object-cover"
					src={img}
				/>
			</CardBody>
			<CardFooter className="text-small justify-between">
				<b>{name.replaceAll("_", " ").toUpperCase()}</b>
				<p className="text-default-500">₹{price}</p>
			</CardFooter>
		</Card>
	);
};

export default BrandCard;
