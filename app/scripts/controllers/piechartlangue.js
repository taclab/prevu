'use strict';

angular.module('prevuApp')
  .controller('PiechartlangueCtrl', function ($scope) {
  $scope.xFunction = function() {
    return function(d) {
      return d.langue;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d.count;
    };
  }
});
