const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A product should have a name'],
	},
	images: [
		{
			type: String,
		},
	],
	type: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	sold: {
		type: Boolean,
		default: false,
	},
	description: {
		type: String,
		minlength: 10,
	},
	// active: {
	// 	type: Boolean,
	// 	default: true,
	// }, since we have sold field
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
