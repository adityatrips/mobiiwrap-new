"use client";

import { useProducts } from "@/context/ProductContext";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CustomLoading from "./CustomLoading";

const TinderCards = ({ className }) => {
	const { fetchNProducts, products, setProducts } = useProducts();

	useEffect(() => {
		fetchNProducts(5);
	}, []);

	return products == null ? (
		<CustomLoading />
	) : (
		<>
			<h3 className="text-center pb-5">Swipe em like it&apos;s hot</h3>
			<div className={`${className} grid h-full w-full place-items-center`}>
				{products.map((card, id) => {
					return (
						<Card
							key={card.slug}
							id={card.slug}
							cards={card}
							setProducts={setProducts}
						/>
					);
				})}
			</div>
		</>
	);
};

const Card = ({ key, id, setProducts, cards }) => {
	const router = useRouter();
	const x = useMotionValue(0);
	const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
	const rotate = useTransform(x, [-200, 0, 200], [-8, 0, 8]);

	const handleDragEnd = () => {
		if (Math.abs(x.get()) > 50) {
			setProducts((pv) => pv.filter((v) => v.slug !== id));
		}
	};

	return (
		<motion.img
			key={key}
			onClick={() => {
				router.push(`/products/${id}`);
			}}
			src={cards.image}
			alt="Placeholder alt"
			className="h-[calc(100vh-9rem)] origin-bottom rounded-lg object-cover hover:cursor-grab active:cursor-grabbing"
			style={{
				gridRow: 1,
				gridColumn: 1,
				x,
				rotate,
				opacity,
				transition: "0.125s transform",
			}}
			drag={"x"}
			dragConstraints={{
				left: 0,
				right: 0,
			}}
			onDragEnd={handleDragEnd}
		/>
	);
};

export default TinderCards;

const cardData = [
	{
		id: 1,
		url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 5,
		url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 6,
		url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 7,
		url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 8,
		url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];
