'use strict';

var passport = require('passport'),
		LocalStrategy = require('passport-local').Strategy;
		// User = require('mongoose').model('User');

module.exports = function (req, res, next) {
	passport.use(new LocalStrategy({
		email: 'email',
		password: 'password'
	}, function (email, password, done) {
	}));
};