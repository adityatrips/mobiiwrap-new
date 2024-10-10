"use client";

import TinderCards from "@/components/TinderCards";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductPage = () => {
	return (
		<div className="py-5 flex flex-col gap-5">
			<section className="block md:hidden">
				<h1 className="text-grad text-2xl">I&apos;m feeling lucky!</h1>
				<TinderCards />
			</section>
			<section>
				<h1 className="text-grad text-2xl mb-5">Trending today</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{["15", "15 Plus", "16", "16 Plus"].map((item) => (
						<Card key={item}>
							<CardHeader>
								<CardTitle>iPhone {item}</CardTitle>
								<CardDescription className="flex gap-2">
									Skin for your iPhone {item}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex gap-2 items-center justify-center">
								<Image
									className="w-1/2 h-auto rounded"
									src="https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.medium.jpg"
									alt="iphone"
									width={400}
									height={400}
								/>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quidem minus eius eligendi aut esse alias sint ullam?
									Consequatur, dolor quibusdam.
								</p>
							</CardContent>
							<CardFooter>
								<Link
									href={`/products/${item.toLowerCase().replaceAll(" ", "-")}`}
									className="w-full"
								>
									<Button className="w-full">Buy now</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
};

export default ProductPage;
