'use strict';

angular.module('app.routes', [
	'ngRoute',

	'user.routes',
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
}]);