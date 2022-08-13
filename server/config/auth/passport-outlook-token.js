const passport = require('passport');
const OutlookStrategy = require('passport-outlook').Strategy;

const User = require('../../models/userSchema');

// passport.use(new OutlookStrategy({}));

passport.use(
	new OutlookStrategy(
		{
			clientID: process.env.OUTLOOK_CLIENT_ID,
			clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
			callbackURL: '/auth/outlook/callback',
		},
		async function (accessToken, refreshToken, profile, done) {
			try {
				// var user = {
				//     outlookId: profile.id,
				//     name: profile.DisplayName,
				//     email: profile.EmailAddress,
				//     accessToken: accessToken,
				// };
				let user = await User.findOne({email: profile._json.email});
				if (user) {
					return done(null, user);
				}

				user = await User.create({
					email: profile._json.email,
					name: [profile._json.given_name, profile._json.family_name],
					accessToken: accessToken,
				});
				return done(null, user);
			} catch (err) {
				return done(err, null);
			}
		},
	),
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});
