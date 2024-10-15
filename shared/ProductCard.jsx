"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ slug, img, price, title }) => {
	const router = useRouter();

	return (
		<Card
			onPress={() => {
				router.push(`/products/${slug}`);
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

export default ProductCard;
