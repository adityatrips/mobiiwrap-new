import { connectToDb } from "@/config/db";
import Product from "@/models/Product";

export const GET = async (req, { params }) => {
	connectToDb();
	const { prod } = params;

	const products = await Product.findOne({
		slug: prod,
	});

	return Response.json(products);
};
