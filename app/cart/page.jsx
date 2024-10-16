"use client";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import CustomLoading from "@/shared/CustomLoading";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect } from "react";

const CartPage = () => {
	const { cart, fetchCart } = useCart();
	const { user } = useAuth();

	useEffect(() => {
		fetchCart();
	}, []);

	return cart == null ? (
		<CustomLoading />
	) : (
		<section className="container mx-auto flex h-nav-full items-start gap-5 pt-10">
			<div className="flex flex-col gap-5 w-full">
				<Table removeWrapper className="w-full">
					<TableHeader>
						<TableColumn className="w-fit">Product</TableColumn>
						<TableColumn>Price</TableColumn>
						<TableColumn>Quantity</TableColumn>
						<TableColumn>Total</TableColumn>
					</TableHeader>
					<TableBody>
						{cart.products.map((product, index) => (
							<TableRow key={index}>
								<TableCell className="flex flex-col items-center justify-center gap-2 w-fit">
									<Image
										src={product.item.image}
										alt={product.item.name}
										height={1000}
										width={1000}
										className="object-cover h-auto max-w-36 rounded-large"
									/>
									<span>{product.item.name}</span>
								</TableCell>
								<TableCell>{product.cost}</TableCell>
								<TableCell>{product.quantity}</TableCell>
								<TableCell>{product.quantity * product.cost}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className="flex justify-between items-center p-5 rounded-large bg-[hsl(var(--nextui-content1))]">
					<div className="flex flex-col gap-2">
						<span>Subtotal</span>
						<span>Taxes</span>
						<span>Grand total</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-right">{cart.total}</span>
						<span className="text-right">{Math.ceil(cart.total * 0.18)}</span>
						<span className="text-right text-4xl heading">
							{Math.ceil(cart.total + cart.total * 0.18)}
						</span>
					</div>
				</div>
			</div>
			{/* <h1>World</h1> */}
		</section>
	);
};

export default CartPage;
