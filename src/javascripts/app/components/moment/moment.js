'use strict';

define(function (require, exports, module) {
	var angular = require('angular');

	function MomentFactory () {
		return require('moment');
	}

	module.exports = angular.module('myapp.components.moment', [])
		.factory('moment', MomentFactory);
});