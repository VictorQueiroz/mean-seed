var User = require('../models/User');

exports.list = function (req, res) {
	User.list(req, res);
};

exports.get = function (req, res) {
	User.get(req, res);
};

exports.store = function (req, res) {
	User.store(req, res);
};

exports.update = function (req, res) {
	User.update(req, res);
};

exports.destroy = function (req, res) {
	User.destroy(req, res);
};