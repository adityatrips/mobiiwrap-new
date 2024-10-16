import Image from "next/image";

const IndexPage = () => {
	return (
		<section className="h-nav-full flex flex-col justify-center items-center">
			<Image
				priority
				src="/iphone_top.webp"
				alt="iphone_top"
				width={800}
				height={490}
				className="fixed bottom-0 max-w-[75%] md:max-w-[50%] h-auto"
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
