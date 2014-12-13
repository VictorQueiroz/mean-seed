'use strict';

define(function (require, exports, module) {
	var angular = require('angular');

	module.exports = angular.module('myapp.components.underscore', [])
		.factory('_', function () {
			return require('underscore');
		})
});