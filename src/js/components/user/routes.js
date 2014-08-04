'use strict';

angular.module('User/Routes', [
	'User/Controllers'
])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/profile', {
			templateUrl: 'users/profile.tpl.html',
			controller: 'ProfileCtrl'
		});
}]);