'use strict';

angular.module('app.services', [
	'user.services'
])

.value('version', '0.0.1')

.factory('$socket', ['$window', function($window){
	return $window.io();
}]);