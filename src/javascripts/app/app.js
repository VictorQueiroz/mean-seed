'use strict';

define(function (require, exports, module) {
	var angular = require('angular');

	module.exports = angular.module('myapp', [
		require('angular-animate').name,
		require('angular-sanitize').name,
		require('angular-cookies').name,
		require('angular-messages').name,
		require('angular-ui-router').name,
		require('components/components').name
	]);
});