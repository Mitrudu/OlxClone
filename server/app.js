const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const userRouter = require('./routes/userRoutes');

// can be uncommented before deploying
// app.enable('trust proxy');

app.use(express.json({limit: '20kb'}));
app.use(express.urlencoded({extended: true, limit: '10kb'}));
app.use(cookieParser());

// 1) Add routes
app.use('/user', userRouter);
// 2) handle the error routes
app.all('*', (req, res, next) => {
	next(new Error(`Can't find ${req.originalUrl} on this server!`));
}); // for now need to create new apperror

// app.use(globalErrorHandler);

module.exports = app;
