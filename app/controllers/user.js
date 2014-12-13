'use strict';

var _ = require('underscore');
var path = require('path');
var models = require(path.join(path.dirname(__dirname), 'models'));
var User = models.User;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

exports.list = function (req, res) {
	User
		.find()
		.exec()
		.then(function(users) {
			res.json(users);
		}, function (err) {
			res.json(err);
		});
};

exports.store = function (req, res) {	
	var user = new User(user);

	user
		.save()
		.then(function (user) {
			res.json(user);
		}, function (err) {
			res.json(err);
		});
};

exports.get = function (req, res) {
	User
		.findById(req.params.user)
		.exec()
		.then(function (user) {
			res.json(user);
		}, function (err) {
			res.json(err);
		});
};

exports.update = function (req, res) {
	User
		.findById(req.params.user)
		.exec()
		.then(function (user) {
			if(!user) {
				return res.status(404).end();
			}
			
			user = _.extend(user, req.body);
			user.save(function (err) {
				if(err) return res.json(err);

				User
					.findById(user._id)
					.exec()
					.then(function (user) {
						res.json(_.omit(user, 'password'));
					}, function (err) {
						res.json(err);
					});
			});
		}, function (err) {
			res.json(err);
		});
};

exports.destroy = function (req, res) {
	User
		.remove({ _id: req.params.user })
		.exec()
		.then(function () {
			res.status(200).end();
		}, function (err) {
			res.json(err);
		});
};
