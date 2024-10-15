import { connectToDb } from "@/config/db";
import User from "@/models/User";
import * as jwt from "jsonwebtoken";

export const POST = async (req, res) => {
	const { email, password, name } = await req.json();
	connectToDb();

	try {
		const newUser = new User({
			name,
			email,
			password,
		});

		await newUser.save();

		const token = newUser.generateJWT();

		return Response.json({
			token,
		});
	} catch (error) {
		console.error(error);
		return Response.json({
			error: error.message,
		});
	}
};
