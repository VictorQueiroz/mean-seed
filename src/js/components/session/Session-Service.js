'use strict';

angular.module('Session/Service', [
	'ngCookies'
])

.factory('Session', ['$http', '$cookieStore', function ($http, $cookieStore) {
	return {
		isAuthenticated: $http.get('/auth/check').then(function(res) {
			if(res.data.result)
				return {result: true};
			else
				return {result: false};
		}),
	};
}]);