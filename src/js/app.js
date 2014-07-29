'use strict';

var socket = io();

socket.on('user authenticated', function(user) {
	alert('Congratulations, '+user.username+', you\'re logged!');
});	

angular.module('app', [
	'app.controllers',
	'app.filters',
	'app.directives',
	'app.services',
	'partials',

	'ngRoute',

	'ui.bootstrap',
	'mgcrea.ngStrap'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.tpl.html'
		})

		.when('/about-us', {
			templateUrl: 'about-us.tpl.html'
		})

		.when('/authentication', {
			templateUrl: 'authentication.tpl.html',
			controller: 'AuthCtrl'
		})

		.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
}]);