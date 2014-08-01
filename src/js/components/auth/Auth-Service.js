'use strict';

angular.module('Auth/Service', [
	'ngCookies',

	'Session'
])

.factory('AuthService', ['$cookieStore', function ($cookieStore) {
}]);