'use strict';

define(function (require, exports, module) {
	var angular = require('angular');

	module.exports = angular.module('myapp.components', [
		require('./auth/auth').name,
		require('./moment/moment').name,
		require('./underscore/underscore').name
	]);
});