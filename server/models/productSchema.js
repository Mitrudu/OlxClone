const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A product should have a name'],
	},
	cost: {
		type: Number,
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	description: {
		type: String,
		minlength: 10,
	},
	active: {
		type: Boolean,
		default: true,
	},
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
