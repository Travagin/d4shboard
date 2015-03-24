'use strict';

angular.module('dashboard', ['ui.router','github', 'weather', 'twitter', 'freelancing'])
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
