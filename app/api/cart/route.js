import Cart from "@/models/Cart";
import Product from "@/models/Product";
import { connectToDb } from "@/config/db";
export const GET = async (req, res) => {
	connectToDb();

	try {
		const cart = await Cart.findOne({
			user: req.nextUrl.searchParams.get("user"),
		}).populate("products.item");

		if (!cart) {
			return Response.json("Cart not found.", { status: 404 });
		}

		return Response.json(
			{
				user: req.nextUrl.searchParams.get("user"),
				cart,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return Response.json("There was some error fetching the cart.", {
			status: 500,
		});
	}
};

export const POST = async (req, res) => {
	const { item, quantity, userId, cost } = await req.json();
	connectToDb();

	try {
		const cart = await Cart.findOne({
			user: userId,
		});

		cart.products.push({ item, quantity, cost });
		cart.totalItems += quantity;
		cart.total += quantity * cost;

		await cart.save();

		return Response.json(cart, { status: 201 });
	} catch (error) {
		return Response.json("There was some error creating the cart.", {
			status: 500,
		});
	}
};
