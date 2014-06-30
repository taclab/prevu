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
  $scope.xFunctionUFR = function() {
    return function(d) {
      return d.issuesdate;
    };
  }
  $scope.yFunctionUFR = function(t) {
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
    return function(key, x, y, e, graph) {
      return  '<h3>' + e.point.name + '</h3>'+e.point.value
    }
  }
  $scope.toolTipContentFunctionUFR = function() {
    return function(key, x, y, e, graph) {
      return  '<h3>' + e.point.Ufr + '</h3>'+e.point.issues+' '+e.point.issuesdate
    }
  }
  $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      return d3.format(',d')(d);
    }
  }

});