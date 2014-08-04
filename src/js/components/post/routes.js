'use strict';

angular.module('Post/Routes', [
	'Post/Controllers'
])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/posts', {
			templateUrl: 'posts/list.tpl.html',
			controller: 'PostListCtrl'
		});
}]);