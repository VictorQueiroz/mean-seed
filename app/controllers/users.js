'use strict';

var User = require('../models/user'),
		passport = require('passport');

exports.list = function (req, res) {
	User
		.find()
		.populate('posts')
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
		.findById(id)
		.populate('posts')
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