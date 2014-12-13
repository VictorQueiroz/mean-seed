'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var filters = require(path.join(__dirname, 'filters'));

module.exports = function (app) {
	fs
		.readdirSync(__dirname)
		.filter(function (file) {
			return file !== 'index.js' && file !== 'filters';
		})
		.forEach(function (file) {
			var router = express.Router();
			var resourceName = file.replace(/.js$/, '');
			var controllerFilePath = path.join(path.dirname(__dirname), 'controllers', file);

			app.use('/' + resourceName, router);

			var controller = fs.existsSync(controllerFilePath) ? require(controllerFilePath.replace(/.js$/, '')) : false;
			require(path.join(__dirname, file))(router, controller, filters);
		});
};