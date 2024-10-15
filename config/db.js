import { connect } from "mongoose";

export const connectToDb = async () => {
	try {
		await connect(process.env.MONGO_URI);
		console.log("Connected to database");
	} catch (error) {
		console.error("Error connecting to database");
	}
};
