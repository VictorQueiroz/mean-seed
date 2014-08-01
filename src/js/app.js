'use strict';

var socket = io.connect();

angular.module('App', [
	'ngRoute',
	'ngAnimate',

	'App/Routes',
	'App/Controllers',
	'App/Filters',
	'App/Directives',
	'App/Services',
	'partials',

	'ui.bootstrap',
	'mgcrea.ngStrap'
]);