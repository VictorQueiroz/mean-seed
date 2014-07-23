'use strict';

angular.module('app', [
	'app.controllers',
	'app.filters',
	'app.directives',
	'app.services',
	'partials',

	'ngRoute'
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
			templateUrl: 'authentication.tpl.html'
		})

		.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
}]);