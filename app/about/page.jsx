import Image from "next/image";
import React from "react";

const AboutPage = () => {
	return (
		<section className="flex gap-5 items-center">
			<Image
				src="/about.jpg"
				className="rounded"
				alt="iphone"
				width={400}
				height={400}
			/>
			<div className="flex flex-col gap-5">
				<h1 className="text-grad text-3xl">
					Make your customers happy by giving services.
				</h1>
				<p>
					Founded in 2019 and nestled in the bustling Gaffar Market of Karol
					Bagh, Mobiiwrap is your go-to destination for top-quality wrapping
					services, including mobile phones, earphones, and other device skins.
					Renowned for our superior quality, excellent service, and impeccable
					finishing, we consistently strive to exceed your expectations.
				</p>
				<p>
					I&apos;m Shubham Khandelwal, this is Mobiiwrap, and we love
					“wrapping”. Our vision is to become a global leader in wrapping
					solutions. We are dedicated to offering customized wrapping options
					for everything, transforming everyday items into unique, personalized
					pieces tailored to your preferences.
				</p>
				<p>
					Our range of skins includes mobile phone skins, earphone skins, and a
					lot more. Each product is crafted to provide a fresh, customized look
					while offering protection and style.
				</p>
				<p>
					Join us on our journey to give everything a fresh, customized look. At
					Mobiiwrap, we believe that with the right wrap, anything is possible.
					Explore our skins collection today and discover how we can transform
					your devices into unique, personalized masterpieces.
				</p>
			</div>
		</section>
	);
};

export default AboutPage;
