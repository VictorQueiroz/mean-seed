'use strict';

var path = require('path');
var passport = require(path.join(path.dirname(path.dirname(__dirname)), 'passport'));

exports.authenticated = function (req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}

	return res.status(403).end();
};

exports.token = passport.authenticate('token');