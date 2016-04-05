'use strict';
angular.module('prevuApp').controller('StackedareachartCtrl', function($scope) {
  
   var colorViz = ['#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f','#8dd3c7','#bebada','#fb8072'];   

  $scope.color_viz = function() {
  return function(d, i) {
      return colorViz[i];
    };
  }  
  $scope.xFunction = function() {
    return function(d) {
      return d.issuesdate;
    };
  }
  $scope.yFunction = function() {
    return function(d) {
      return d.issues;
    };
  }
  $scope.xFunctionMonthIssues = function() {
    return function(d) {
      return d.month;
    };
  }
  $scope.yFunctionMonthIssues = function() {
    return function(d) {
      return d3.round(d.issues);
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