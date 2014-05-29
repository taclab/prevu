'use strict';

angular.module('prevuApp')
  .controller('MultibarhorizchartCtrl', function ($scope) {

  $scope.xFunction = function() {
    return function(d) {
      return d._id;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d.count;
    };
  }
   $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      return d.ufr;
    }
  }
});
