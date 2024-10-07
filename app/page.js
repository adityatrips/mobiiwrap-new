"use client";

import Image from "next/image";

const LandingPage = () => {
	return (
		<>
			<section className="flex items-center justify-center flex-col">
				<div className="mb-20">
					<h1 className="text-6xl font-[900]">MobiiWrap</h1>
					<p className="text-xl text-center">Skins for all your devices.</p>
				</div>
				<Image
					className="select-none center-h-absolute max-h-[50%] landing-image"
					src="/iphone_top.webp"
					alt="iphone"
					width={400}
					height={400}
				/>
			</section>
		</>
	);
};

export default LandingPage;
