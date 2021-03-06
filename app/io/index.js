'use strict';

var fs = require('fs');
var path = require('path');
var models = require(path.join(path.dirname(__dirname), 'models'));

module.exports = function (socket, io) {
	fs
		.readdirSync(__dirname)
		.filter(function (file) {
			return file !== 'index.js';
		})
		.forEach(function (file) {
			require(path.join(__dirname, file))(socket, models, io);
		});
};