const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
	name: [
		{
			type: String,
			required: true,
		},
	], // first + middle + last
	image: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	role: {
		type: String,
		enum: ['admin', 'user'],
		default: 'user',
	},
	address: {
		type: String,
	},
	accessToken: {
		type: String,
	},
	recentlyViewed: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
	purchased: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
	likedProducts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
