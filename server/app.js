const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const passport = require('passport');
require('./config/auth/passport-outlook-token');

const userRouter = require('./routes/userRoutes');

// app.enable('trust proxy');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());

app.use(passport.initialize());

// 1) Add routes
app.use('/user', userRouter);
app.get('/health', (req, res) => {
	res.status(200).json({
		message: "I'm healthy",
		success: true,
	});
});
// 2) handle the error routes
app.all('*', (req, res, next) => {
	next(new Error(`Can't find ${req.originalUrl} on this server!`));
}); // for now need to create new apperror

// app.use(globalErrorHandler);

module.exports = app;
