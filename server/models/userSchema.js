const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please tell us your name!'],
		},
		email: {
			type: String,
			required: [true, 'Please provide your email'],
			unique: true,
			lowercase: true,
			validate: [validator.isEmail, 'Please provide a valid email'],
		},
		photo: {
			type: String,
			default: 'default.jpg',
		},
		role: {
			type: String,
			enum: ['admin', 'user'],
			default: 'user',
		},
		// password: {
		// 	type: String,
		// 	required: [true, 'Please provide a password'],
		// 	minlength: 8,
		// 	select: false,
		// },
		// passwordConfirm: {
		// 	type: String,
		// 	required: [true, 'Please confirm your password'],
		// 	validate: {
		// 		// This only works on CREATE and SAVE!!!
		// 		validator: function (el) {
		// 			return el === this.password;
		// 		},
		// 		message: 'Passwords are not the same!',
		// 	},
		// },
		active: {
			type: Boolean,
			default: true,
			select: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
