'use strict';

angular.module('github').directive('githubDirective', [function () {
	return {

		restrict : 'E',
		templateUrl: 'components/templates/widgetGithub.html',

	};

}]);