'use strict';

angular.module('dashboard', ['ui.router','github', 'weather'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl'
	});

	$urlRouterProvider.otherwise('/');
})
;
