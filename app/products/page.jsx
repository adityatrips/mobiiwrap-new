"use client";

import { useProducts } from "@/context/ProductContext";
import ProductCard from "@/shared/ProductCard";
import CustomLoading from "@/shared/CustomLoading";

const Products = () => {
	const { products } = useProducts();

	return products === null ? (
		<CustomLoading />
	) : (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
			{products.map((product) => {
				console.log(products);
				return (
					<ProductCard
						key={product.slug}
						slug={product.slug}
						img={product.image}
						price={product.price}
						title={product.name}
					/>
				);
			})}
		</div>
	);
};

export default Products;
