'use strict';

angular.module('app.services', [])

.value('version', '0.0.1')

.factory('$socket', ['$window', function($window){
	return $window.io();
}])

.factory('User', ['$resource', function ($resource) {
	return $resource ('', {}, {
		'list': {url: '/api/users', params: {}, method: 'GET', isArray: true},
		'store': {url: '/api/users', params: {}, method: 'POST', isArray: false},
		'update': {url: '/api/users/:id', params: {id: '@id'}, method: 'PUT', isArray: false},
		'destroy': {url: '/api/users/:id', params: {id: '@id'}, method: 'DELETE', isArray: false}
	});
}]);