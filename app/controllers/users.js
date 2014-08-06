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

exports.update = function (req, res) {
	var id = req.params.id;
	var data = req.body;

	User
		.findById(id)
		.exec(function(err, user) {
			Object.keys(data).forEach(function(key) {
				if(user[key] != 'undefined')
					user[key] = data[key];
			});

			user.save();

			res.json(user);
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	User
		.findById(id)
		.exec(function(err, user) {
			if(user.remove())
				res.json({result: true});
			else
				res.json({result: false});
		});
};