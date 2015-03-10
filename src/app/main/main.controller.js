'use strict';

var app = angular.module('github');


app.controller('MainCtrl',['$scope','$http', 'Widgets',function ($scope, $http, Widgets) {

	$scope.widget = {};
	$scope.widgets = Widgets.all();

	
	$scope.addWidget = function(widget){
		Widgets.add(widget);

		$scope.widgetAdded = true;
		
	};

	$scope.search = function(username){

		console.log('Searching for ' + username);

		$scope.userNotFound = false;
		$scope.loaded = false;

		$http.get('https://api.github.com/users/' + username)
		.success(function (data) {

			$scope.user = data;
			$scope.loaded = true;
		})
		.error(function () {
			$scope.userNotFound = true;
		});

		$http.get('https://api.github.com/users/' + username + '/repos')
		.success(function (data) {

			$scope.repos = data;
			$scope.reposFound = data.length > 0;

		});

		$http.get('https://api.github.com/users/' + username + '/followers')
		.success(function (data) {

			$scope.followers = data;
			$scope.followersFound = data.length > 0;

		});

	};
}]);

app.factory('Widgets', function () {
	var self = {},
	widgets = [];

	self.all = function () {
		return widgets;
	}

	self.add = function (widget) {
		widgets.push(angular.copy(widget));
	};

	return self;
});


