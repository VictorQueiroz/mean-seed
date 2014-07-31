'use strict';

angular.module('user.routes', [
	'user.ctrl.auth'
])

.config(['$routeProvider', function ($routeProvider) {
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
		});
}]);