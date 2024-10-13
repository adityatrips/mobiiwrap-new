"use client";

import { firestore } from "@/config/firebase";
import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	DocumentReference,
	setDoc,
} from "firebase/firestore";
import Image from "next/image";
import { useEffect } from "react";
import { mobiles } from "./models";

const IndexPage = () => {
	useEffect(() => {
		mobiles["nothing"].map((item) => {
			setDoc(
				doc(firestore, "products", `nothing_${item}`),
				{
					name: item.replaceAll("_", " "),
					id: item,
					img: "/apple/iphone.webp",
					price: 499,
					category: "skin",
					colors: ["red", "blue", "green"],
					stock: 100,
				},
				{ merge: true }
			);
		});
	}, []);

	return (
		<section className="h-nav-full flex flex-col justify-center items-center">
			<Image
				priority
				src="/iphone_top.webp"
				alt="iphone_top"
				width={800}
				height={490}
				className="absolute bottom-0 max-w-[75%] md:max-w-[50%] h-auto"
				style={{
					transform: "translateX(-50%)",
					left: "50%",
				}}
			/>
			<h1>Mobii Wrap</h1>
			<p className="mb-40 text-center mx-auto max-w-[80%]">
				Welcome to Mobii Wrap! We are a mobile phone accessory store that
				provides high-quality phone wraps and cases for your mobile devices.
			</p>
		</section>
	);
};

export default IndexPage;
