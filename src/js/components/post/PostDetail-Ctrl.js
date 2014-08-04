'use strict';

angular.module('Post/Ctrl/PostDetail', [
	'ngRoute',

	'Post/Service'
])

.controller('PostDetailCtrl', ['$scope', '$routeParams', 'Post', function ($scope, $routeParams, Post) {
	var user = $scope.user = Post.get({ id: $routeParams.id });
}]);