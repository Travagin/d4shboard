'use strict';

angular.module('dashboard', ['ui.router','github', 'weather', 'twitter', 'freelancing'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl',
		resolve: {
			widgets: function (Widgets) {
				return Widgets.fetch();
			}
		}
	});

	$urlRouterProvider.otherwise('/');
})
;
