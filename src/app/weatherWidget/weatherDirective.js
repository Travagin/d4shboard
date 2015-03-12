'use strict';

angular.module('weather').directive('weatherDirective', [function () {
	return {
		restrict : 'E',
		templateUrl: 'components/templates/widgetWeather.html',
	};
}]);

