const {Router} = require('express');
const router = Router();
const passport = require('passport');

const userController = require('../controllers/userController');

router.post(
	'/auth/outlook',
	passport.authenticate('windowslive', {
		scope: ['openid', 'profile', 'offline_access', 'https://outlook.office.com/Mail.Read'],
	}),
);

router.get(
	'/auth/outlook/callback',
	passport.authenticate('windowslive', {failureRedirect: '/login'}),
	function (req, res) {
		res.redirect('/');
	},
);
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;
