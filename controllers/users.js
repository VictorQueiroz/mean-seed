'use strict';

var mongoose = require('mongoose'),
		passport = require('passport');

exports.signin = function (req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		console.log(info, user, err);
		
		if (err || !user) {
			res.send(400, info);
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;

			req.login(user, function(err) {
				if (err) {
					res.send(400, err);
				} else {
					res.jsonp(user);
				}
			});
		}
	})(req, res, next);
};