import { connectToDb } from "@/config/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const POST = async (req, res) => {
	const { email, password } = await req.json();
	connectToDb();

	try {
		const user = await User.findOne({
			email,
		});

		if (!user) {
			return Response.json(
				{
					message: "Invalid credentials",
				},
				{ status: 401 }
			);
		}

		const isMatch = await bcrypt.compareSync(password, user._doc.password);
		console.log(`isMatch: ${isMatch}`);

		if (!isMatch) {
			return Response.json(
				{
					message: "Invalid credentials",
				},
				{ status: 401 }
			);
		}

		const token = user.generateJWT();

		return Response.json(
			{
				token,
				...user._doc,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);

		return Response.json(
			{
				error,
			},
			{
				status: 500,
			}
		);
	}
};
