import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		enum: ["watches", "consoles", "airpods", "phones"],
		default: "phones",
	},
	reviews: {
		type: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: "User",
					required: true,
				},
				rating: {
					type: Number,
					required: true,
				},
				comment: {
					type: String,
					required: true,
				},
			},
		],
		default: [],
	},
	rating: {
		type: Number,
		default: 0,
	},
});

ProductSchema.pre("save", async function (next) {
	let total = 0;
	this.reviews.forEach((review) => {
		total += review.rating;
	});
	this.rating = total / this.reviews.length;
	next();
});

export default models.Product || model("Product", ProductSchema);
