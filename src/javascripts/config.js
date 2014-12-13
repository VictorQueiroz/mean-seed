'use strict';

requirejs.config({
	deps: ['../common'],
	enforceDefine: true,
	waitSeconds: 0,
	paths: {
		'angular': '../../../public/lib/angular/angular',
		'moment': '../../../public/lib/moment/min/moment-with-locales',
		'underscore': '../../../public/lib/underscore/underscore',
		'angular-cookies': '../../../public/lib/angular-cookies/angular-cookies',
		'angular-resource': '../../../public/lib/angular-resource/angular-resource',
		'angular-ui-router': '../../../public/lib/angular-ui-router/release/angular-ui-router',
		'angular-sanitize': '../../../public/lib/angular-sanitize/angular-sanitize',
		'angular-animate': '../../../public/lib/angular-animate/angular-animate',
		'angular-messages': '../../../public/lib/angular-messages/angular-messages',
		'angular-touch': '../../../public/lib/angular-touch/angular-touch',
		'jquery': '../../../public/lib/jquery/dist/jquery',
		'requirejs': '../../../public/lib/requirejs/require'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'moment': {
			exports: 'moment'
		},
		'jquery': {
			exports: 'jQuery'
		},
		'angular-ui-router': {
			deps: ['angular'],
			exports: 'angular.module(\'ui.router\')'
		},
		'angular-animate': {
			exports: 'angular.module(\'ngAnimate\')',
			deps: ['angular']
		},
		'angular-touch': {
			exports: 'angular.module(\'ngTouch\')',
			deps: ['angular']
		},
		'angular-cookies': {
			exports: 'angular.module(\'ngCookies\')',
			deps: ['angular']
		},
		'angular-resource': {
			exports: 'angular.module(\'ngResource\')',
			deps: ['angular']
		},
		'angular-sanitize': {
			exports: 'angular.module(\'ngSanitize\')',
			deps: ['angular']
		},
		'angular-messages': {
			exports: 'angular.module(\'ngMessages\')',
			deps: ['angular']
		},
		'angular': {
			exports: 'angular',
			deps: ['requirejs', 'jquery']
		}
	}
});