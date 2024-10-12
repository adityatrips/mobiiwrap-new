"use client";

import { Button, Card, CardBody, CardFooter, Input } from "@nextui-org/react";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { mobiles } from "../models";

const layout = () => {
	return (
		<div>
			<div className="mb-10 flex items-center justify-between">
				<span>100 products</span>
				<div className="md:flex hidden items-center gap-2">
					<Input type="text" placeholder="Search..." />
					<Button>Search</Button>
				</div>
				<Button>
					<Filter />
				</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
				{Object.keys(mobiles).map((product) => {
					return (
						<ProductCard
							key={product.id}
							brand={product}
							id={product}
							img="/apple/iphone.webp"
							price={"499"}
							title={product}
						/>
					);
				})}
			</div>
		</div>
	);
};

const ProductCard = ({ brand, id, img, price, title }) => {
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

export default layout;
