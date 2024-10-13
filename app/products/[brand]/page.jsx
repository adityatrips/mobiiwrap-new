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
import { useBrand } from "@/context/BrandContext";
import { useEffect, useState } from "react";

const BrandCard = ({ params: { brand } }) => {
	const { getBrand } = useBrand();
	const [models, setModels] = useState(null);

	useEffect(() => {
		const fetchModels = async () => {
			const tmp = await getBrand(brand);
			setModels(Object.values(tmp));
		};
		fetchModels();
	}, []);

	return models === null ? (
		<div className="flex items-center justify-center h-nav-full">
			<CircularProgress />
		</div>
	) : (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
			{models.map((product) => {
				return (
					<ProductCard
						key={product.id}
						id={product.id}
						img={product.img}
						name={product.name}
						price={product.price}
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
