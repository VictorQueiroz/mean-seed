'use strict';

var LocalStrategy = require('passport-local').Strategy;
var path = require('path');

module.exports = function (passport, models) {
	var User = models.User;

	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	}, function (email, password, done) {
		User.findOne({
			email: email,
			status: 'approved'
		}).exec(function (err, user) {
			if(err) {
				return done(err);
			}

			if(!user) {
				return done(null, false, { message: 'Incorrect email.' });
			}	

			if(!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}	

			return done(null, user);
		});
	}));
};