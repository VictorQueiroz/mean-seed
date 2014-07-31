'use strict';

var socket = io();

angular.module('app', [
	'ngRoute',
	'ngAnimate',

	'app.routes',
	'app.controllers',
	'app.filters',
	'app.directives',
	'app.services',
	'partials',

	'ui.bootstrap',
	'mgcrea.ngStrap'
]);