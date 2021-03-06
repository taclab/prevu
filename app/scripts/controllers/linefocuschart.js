'use strict';
angular.module('prevuApp').controller('LinefocuschartCtrl', function($scope) {
  $scope.xFunction = function() {
    return function(d) {
      return d.timestamp;
    };
  }
  $scope.yFunction = function() {
    return function(d) {     
      return d.issues;
    };
  }
  $scope.xAxisTickFormatFunction = function() {
    return function(d) {
      return d3.time.format('%d-%b-%y')(new Date(d * 1000));
    }
  }
  $scope.toolTipContentFunction = function() {
    return function(key) {
      return 'Super New Tooltip' + '<h1>' + key + '</h1>'
    }
  }
  $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      return d3.format(',d')(d);
    }
  }

});