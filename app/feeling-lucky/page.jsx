"use client";

import TinderCards from "@/shared/TinderCards";
import React from "react";

const FeelingLucky = () => {
	return (
		<div className="min-h-nav-full flex flex-col items-center justify-center">
			<h1>Swipe on our products 😉</h1>
			<small>(Best experience on mobile devices)</small>
			<TinderCards />
		</div>
	);
};

export default FeelingLucky;
