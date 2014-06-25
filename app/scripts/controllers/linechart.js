'use strict';
angular.module('prevuApp').controller('LinechartCtrl', function($scope) {
  $scope.xFunction = function() {
    return function(d) {
      return d.id;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d.value;
    };
  }
  $scope.xAxisTickFormatFunction = function() {
    return function(d) {
      return d3.time.format('%d-%b-%y')(new Date(d * 1000));
    }
  }
  $scope.toolTipContentFunction = function() {
    return function(key, x, y, e, graph) {
      console.log(e);
      return  '<h3>' + e.point.name + '</h3>'+e.point.value
    }
  }
  $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      return d3.format(',d')(d);
    }
  }

});