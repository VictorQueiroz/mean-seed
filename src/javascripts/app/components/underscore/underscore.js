'use strict';

define(function (require, exports, module) {
	var angular = require('angular');

	function UnderscoreFactory () {
		return require('underscore');
	}

	module.exports = angular.module('myapp.components.underscore', [])
		.factory('_', UnderscoreFactory);
});