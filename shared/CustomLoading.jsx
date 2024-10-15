import { CircularProgress } from "@nextui-org/react";
import React from "react";

const CustomLoading = () => {
	return (
		<div className="flex items-center justify-center h-nav-full">
			<CircularProgress />
		</div>
	);
};

export default CustomLoading;
