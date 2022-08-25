const User = require('../models/userSchema');
// const transporter = require('../utils/config/nodemailer');
const Email = require('../utils/config/nodemailer');

module.exports.outlookOauth = async (req, res) => {
	const user = await User.find({email: req.user.email});
};

module.exports.bookmark = async (req, res, next) => {
	let userId = req.user._id;
	let productId = req.params.productId;
};

module.exports.getProfile = async (req, res, next) => {
	// get the profile of the user
};

module.exports.updateProfile = async (req, res, next) => {
	//update the profile of the user
};
