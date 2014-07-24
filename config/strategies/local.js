'use strict';

var passport = require('passport'),
		LocalStrategy = require('passport-local').Strategy,
		User = require('../../models/user');

module.exports = function (req, res, next) {	
	passport.use(new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password'
		},
		function(username, password, done) {
			User.findOne({
				username: username
			}, function(err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false, {
						message: 'Unknown user'
					});
				}
				console.log(user);
				return;
				if (!user.authenticate(password)) {
					return done(null, false, {
						message: 'Invalid password'
					});
				} else {
				}

				return done(null, user);
			});
		}
	));
};