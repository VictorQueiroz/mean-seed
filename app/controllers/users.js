'use strict';

var User = require('../models/user'),
		passport = require('passport');

// exports.signin = function (req, res, next) {
// 	passport.authenticate('local', function(err, user, info) {
		
// 		if (err || !user) {
// 			console.log('Some trouble here.');
// 			res.send(400, info);
// 		} else {
// 			console.log('Not a trouble at all.');

// 			// Remove sensitive data before login
// 			user.password = undefined;
// 			user.salt = undefined;

// 			req.login(user, function(err) {
// 				if (err) {
// 					res.send(400, err);
// 				} else {
// 					res.json(user);
// 				}
// 			});
// 		}

// 	})(req, res, next);
// };

exports.signin = function (req, res, next) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.json({result: true});
  res.redirect('/users/' + req.user.username);
};

exports.list = function (req, res) {
	User
		.find()
		.exec(function (err, user) {
			if(err)
				console.log(err);
			else
				res.json(user);
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	User
		.findOne({ _id: id })
		.exec(function(err, user) {
			if(err)
				console.log(err);
			else
				res.json(user);
		});
};

exports.store = function (req, res) {
	var data = req.body;
	var user = new User({
		username: data.username,
		email: data.email,
		name: data.name,
		password: data.password
	});

	user.save(function(err, data) {
		if(err)
			res.json(err)
		else 
			res.json(data);
	});
};

exports.update = function (req, res) {};

exports.destroy = function (req, res) {};