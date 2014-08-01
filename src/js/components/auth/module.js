'use strict';

angular.module('Auth', [
	'ngRoute',

	'Auth/Service'
])

.run(['$rootScope', function($rootScope) {
	$rootScope.$on('$locationChangeStart', function(event) {
		// event.preventDefault();
	});
}]);