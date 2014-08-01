'use strict';

var socket = io.connect();

angular.module('App', [
	'ngRoute',
	'ngAnimate',
	'ngSanitize',

	'App/Routes',
	'App/Controllers',
	'App/Filters',
	'App/Directives',
	'App/Services',
	'partials',

	'Auth',

	'ui.bootstrap',
	'mgcrea.ngStrap'
]);