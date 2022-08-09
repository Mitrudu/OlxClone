const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./app');

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 5500;
const server = app.listen(port, () =>
	console.log(`App running on port ${port}...`)
);
