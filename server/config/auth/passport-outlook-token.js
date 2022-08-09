const passport = require('passport');
const OutlookStrategy = require('passport-outlook').Strategy;

const {User} = require('../../models/userSchema');

passport.use(new OutlookStrategy({}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});
