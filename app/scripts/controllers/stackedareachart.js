'use strict';
angular.module('prevuApp').controller('StackedareachartCtrl', function($scope) {
  $scope.xFunction = function() {
    return function(d) {
      console.log(d.issuesdate);
      return d.issuesdate;
    };
  }
  $scope.yFunction = function() {
    return function(d) {
      console.log(d.issues);
      return d.issues;
    };
  }
  $scope.xAxisTickFormatFunction = function() {
    return function(d) {

      return d3.time.format('%b-%y')(new Date(d * 1000));
    }
  }
  $scope.toolTipContentFunction = function() {
    return function(key) {
      return 'Super New Tooltip' + '<h1>' + key + '</h1>'
    }
  }
  $scope.yAxisTickFormatFunction = function() {
    return function(d) {
    	return d;
      //return d3.format(',d')(d);
    }
  }
});