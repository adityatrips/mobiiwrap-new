import { connectToDb } from "@/config/db";
import Product from "@/models/Product";

function getRandomArbitrary(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}

export const GET = async (req, { params }) => {
	connectToDb();

	if (req.nextUrl.searchParams.get("qty") !== null) {
		const products = await Product.aggregate().sample(
			parseInt(req.nextUrl.searchParams.get("qty"))
		);
		return Response.json(products, { status: 200 });
	}

	const products = await Product.find();
	return Response.json(products, { status: 200 });
};
