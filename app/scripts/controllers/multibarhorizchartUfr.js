'use strict';
angular.module('prevuApp').controller('MultibarhorizchartUfrCtrl', function($scope) {
  var colorSchem = ['#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f'];
  //var colorSchem = ['#2790b0','#c75233'];
 $scope.color_schem = function() {
  return function(d, i) {
      return colorSchem[i];
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
  $scope.xFunctionUfr = function() {
    return function(d) {
      return d.ufr;
    };
  }
  $scope.yFunctionUfrIssues = function() {
    return function(d) {
      return d3.round(d.issues);
    };
  }

   $scope.xFunctionSemestre = function() {
    return function(d) {
      return d.semestre;
    };
  }
  $scope.yFunctionSemestreIssues = function() {
    return function(d) {
      return d3.round(d.issues);
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

});