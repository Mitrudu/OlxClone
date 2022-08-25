const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

const Product = require('../models/productSchema');

exports.getAllProducts = catchAsync(async (req, res, next) => {
	//   const products = await Product.find();
	filter = {};

	const features = new APIFeatures(Product.find(filter), req.query)
		.sort()
		.filter()
		.limitFields()
		.paginate();

	const doc = await features.query();

	res.status(200).json({
		success: true,
		results: doc.length,
		data: {
			products: doc,
		},
	});
});

exports.createProduct = catchAsync(async (req, res, next) => {
	const product = Product.create({
		name: req.body.name,
		images: req.body.images, // should be an array
		cost: req.body.cost,
		type: req.body.type,
		owner: req.user._id,
		description: req.body.description,
	});

	res.status(201).json({
		success: true,
		data: {
			product,
		},
	});
});
