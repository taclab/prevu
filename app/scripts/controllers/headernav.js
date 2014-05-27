'use strict';
angular.module('prevuApp').controller('HeadernavCtrl', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
});