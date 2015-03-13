'use strict';

angular.module('dashboard').directive('packeryDir', ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if($rootScope.packery === undefined || $rootScope.packery === null){
        $rootScope.packery = new Packery(element[0].parentElement, {columnWidth: '.item'});
        $rootScope.packery.bindResize();
        $rootScope.packery.appended(element[0]);
        $rootScope.packery.items.splice(1,1);
      }
      else{
        $rootScope.packery.appended(element[0]);
      }
      $rootScope.packery.layout();
    }
  };
}]);