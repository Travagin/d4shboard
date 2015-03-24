'use strict';

angular.module('freelancing', [])
.constant('ENDPOINT', 'http://pipes.yahoo.com/pipes/pipe.run?Keyword=@@KEYWORD&_id=fc535519e541f93802f54b89bb1a2c4a&_render=json')
.directive('freelancingDirective', [function () {
	return {
		restrict : 'E',
		templateUrl: 'components/templates/widgetFreelancing.html',
        controller: function ($scope, ENDPOINT, $http) {

            $scope.searchJob = function (keyword) {
                var endpoint =
                    ENDPOINT.replace('@@KEYWORD', keyword);

                $http(
                    {
                        method: 'GET',
                        url: endpoint
                    }
                ).success(function success (data) {
                    console.log(data);
                    $scope.jobs = data.value.items;
                    console.log($scope.jobs);
                    $scope.count = data.count;
                });
            }
        }

	};

}]);
