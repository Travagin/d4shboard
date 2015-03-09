'use strict';

var app = angular.module('github');

app.controller('MainCtrl',['$scope','$http',function ($scope,$http) {

	$scope.widget = {};
	$scope.widgets = [];
	$scope.widgetConfiguration = [];

	$scope.addWidget = function(widget){


		$scope.widgets = $scope.widgetConfiguration.push(angular.copy(widget));
		// $scope.widget = {};

		$scope.widgetAdded = true;

		console.log('Add Widget ok');
		console.log($scope.widgets);
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

