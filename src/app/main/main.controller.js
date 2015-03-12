'use strict';

var app = angular.module('dashboard');

// Main Controller
app.controller('MainCtrl',['$scope','Widgets',function ($scope, Widgets) {

	$scope.widget = {};
	$scope.widgets = Widgets.all();


	$scope.addWidget = function(widget){
		Widgets.add(widget);

		$scope.widgetAdded = true;

	};

	$scope.removeWidget = function(widget){
		console.log('Remove pressed');
		Widgets.remove(widget);

	};

}]);

app.factory('Widgets', function () {
	var self = {},
	widgets = [];

	self.all = function () {
		return widgets;
	};

	self.add = function (widget) {
		widgets.push(angular.copy(widget));
	};

	self.remove = function(index){
		widgets.splice(index,1);
	};

	return self;
});

