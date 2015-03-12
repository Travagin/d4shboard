

app.directive('textDirective', [function () {
	return {

		restrict : 'E',
		templateUrl: 'components/templates/widgetText.html',
	}

}]);

app.directive('weatherDirective', [function () {
	return {
		restrict: 'E',
		templateUrl: 'components/templates/widgetWeather.html',
	}
}]);