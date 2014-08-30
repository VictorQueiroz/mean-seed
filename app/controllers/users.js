'use strict';

var User = require('../models/user'),
		passport = require('passport'),
		_ = require('underscore-node');

exports.list = function (req, res) {
	User
		.find()
		.exec(function (err, user) {
			if(err) {
				console.log(err);
			}	else {
				res.json(user);
			};
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	User
		.findById(id)
		.exec(function(err, user) {
			if(err) {
				console.log(err);
			}	else {
				res.json(user);
			};
		});
};

exports.store = function (req, res) {
	var data = req.body;
	var user = new User(_.pick(data,
		'name',
		'username',
		'email',
		'password'
	));

	user.save(function(err, data) {
		if(err) {
			res.json(err)
		} else  {
			res.json(data);
		};
	});
};

exports.update = function (req, res) {
	var id = req.params.id;
	var data = req.body;

	User
		.findById(id)
		.exec(function(err, user) {
			_.extend(user, _.pick(data, 'name', 'username', 'email', 'password'));

			user.save();

			res.json(user);
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	User
		.findById(id)
		.exec(function(err, user) {
			if(user.remove()) {
				res.json({result: true});
			}	else {
				res.json({result: false});
			};
		});
};