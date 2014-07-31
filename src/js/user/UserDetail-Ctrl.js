'use strict';

angular.module('user.ctrl.user-detail', [
	'ngRoute',

	'user.service'
])

.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User', function ($scope, $routeParams, User) {
	var user = $scope.user = User.get({ id: $routeParams.id });
}]);