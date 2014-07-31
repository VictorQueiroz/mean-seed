'use strict';

var socket = io();

socket.on('user authenticated', function(user) {
	alert('Congratulations, '+user.username+', you\'re logged!');
});	

angular.module('app', [
	'app.routes',
	'app.controllers',
	'app.filters',
	'app.directives',
	'app.services',
	'partials',

	'ngRoute',

	'ui.bootstrap',
	'mgcrea.ngStrap'
]);