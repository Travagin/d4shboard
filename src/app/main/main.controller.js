'use strict';

angular.module('github')
.controller('MainCtrl', function ($scope,$http) {

	$scope.addWidget = function(widget){

		$scope.widgetConfiguration = [{color:'',size:''}];
		$scope.widgetConfiguration = angular.copy(widget);

		$scope.widgetAdded = true;

		console.log("Add Widget ok");
		console.log($scope.widgetConfiguration);

		$scope.search = function(username){

			console.log("Searching for " + username);

			$scope.userNotFound = false;
			$scope.loaded = false;

			$http.get("https://api.github.com/users/" + username)
			.success(function (data) {

				$scope.user = data;
				$scope.loaded = true;
			})
			.error(function () {
				$scope.userNotFound = true;
			});
		}
	};
});




