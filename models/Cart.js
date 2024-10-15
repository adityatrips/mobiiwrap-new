import { model, models, Schema } from "mongoose";

const CartSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	products: [
		{
			item: {
				type: Schema.Types.ObjectId,
				ref: "Product",
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
				default: 1,
			},
			cost: {
				type: Number,
				required: true,
			},
		},
	],
	total: {
		type: Number,
		required: true,
	},
});

CartSchema.pre("save", async function (next) {
	let total = 0;
	this.products.forEach((product) => {
		total += product.cost;
	});
	this.total = total;
	next();
});

export default models.Cart || model("Cart", CartSchema);
