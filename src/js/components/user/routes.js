'use strict';

angular.module('User/Routes', [
	'User/Controllers'
])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/users', {
			templateUrl: 'users/list.tpl.html',
			controller: 'UserListCtrl'
		})

		.when('/users/:id', {
			templateUrl: 'users/show.tpl.html',
			controller: 'UserDetailCtrl'
		});
}]);