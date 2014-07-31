'use strict';

angular.module('user.ctrl.user-list', [
	'user.service'
])

.controller('UserListCtrl', ['$scope', 'User', function ($scope, User) {
	var users = $scope.users = User.list();
}]);