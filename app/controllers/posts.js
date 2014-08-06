'use strict';

var Post = require('../models/post'),
		passport = require('passport');

exports.list = function (req, res) {
	Post
		.find()
		.exec(function (err, post) {
			if(err)
				console.log(err);
			else
				res.json(post);
		});
};

exports.get = function (req, res) {
	var id = req.params.id;

	Post
		.findOne({ _id: id })
		.populate('user')
		.exec(function(err, post) {
			if(err)
				console.log(err);
			else
				res.json(post);
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
		if(err)
			res.json(err)
		else 
			res.json(data);
	});
};

exports.update = function (req, res) {};

exports.destroy = function (req, res) {};