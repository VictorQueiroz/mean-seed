'use strict';

var Post = require('../models/post'),
		passport = require('passport'),
		_ = require('underscore-node');

exports.list = function (req, res) {
	Post
		.find()
		.populate('user')
		.exec(function (err, post) {
			if(err) {
				console.log(err);
			}	else {
				res.json(post);
			};
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	Post
		.findById(id)
		.populate('user')
		.exec(function(err, post) {
			if(err) {
				console.log(err);
			}	else {
				res.json(post);
			};
		});
};

exports.store = function (req, res) {
	var data = req.body;
	var post = new Post({
		title: data.title,
		body: data.body,
		user: req.user._id
	});

	post.save(function(err, data) {
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

	Post
		.findById(id)
		.exec(function(err, post) {
			_.extend(post, _.pick(data, 'title', 'body'));

			post.save();

			res.json(post);
		});
 };

exports.destroy = function (req, res) {
	var id = req.params.id;

	Post
		.findById(id)
		.exec(function(err, post) {
			if(post.remove()) {
				res.json({result: true});
			}	else {
				res.json({result: false});
			};
		});
};