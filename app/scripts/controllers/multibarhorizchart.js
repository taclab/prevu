'use strict';

angular.module('prevuApp')
  .controller('MultibarhorizchartCtrl', function ($scope) {

  $scope.xFunction = function() {
    return function(d) {
      return d.label;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d3.round(d.value);
    };
  }
   $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      return d.ufr;
    }
  }
});
