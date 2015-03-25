'use strict';

angular.module('dashboard')

// Main Controller
.controller('MainCtrl',['$scope','Widgets', function ($scope, Widgets) {
	$scope.widget = {};
	$scope.widgets = Widgets.all();
	console.log($scope.widgets);

	$scope.widgetAdded = true;



	$scope.addWidget = function(widget){
		Widgets.add(widget);
		$scope.widgetAdded = true;

	};

	$scope.removeWidget = function(widget){
		console.log('Remove pressed');
		Widgets.remove(widget);
	};

}])

.factory('Widgets',['$http', '$q', function ($http, $q) {
	var self = {},
	widgets = [];

	self.all = function () {
		
		return widgets;
	};

	self.fetch = function(){

		return $http({
			method: 'GET',
			url:'http://localhost:3000/dashboards.json'
		})
		.then(function success (response) {
			widgets = response.data;

			return $q.when(response.data);
		});
	};

	self.add = function (widget) {
		widgets.push(angular.copy(widget));

		$http({
			method: 'POST',
			url:'http://localhost:3000/dashboards.json',
			data: widget
		}).success(function(data){
			console.log(data);
		});
	};

	self.remove = function(index){
		widgets.splice(index,1);

	};

	return self;
}]);

