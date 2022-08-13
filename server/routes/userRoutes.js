const {Router} = require('express');
const router = Router();
const passport = require('passport');

const userController = require('../controllers');

router.post('/oauth/outlook', passport.authenticate('outlook-token', {session: false}));
