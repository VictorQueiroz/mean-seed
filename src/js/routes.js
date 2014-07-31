'use strict';

angular.module('app.routes', [])

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