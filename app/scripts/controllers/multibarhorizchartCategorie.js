'use strict';
angular.module('prevuApp').controller('MultibarhorizchartCategorieCtrl', function($scope) {
 // var colorSchem = ['#8dd3c7','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f'];
  var colorSchem = ['#2790b0','#c75233'];
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
  $scope.xFunctionCategorie = function() {
    return function(d) {
      return d.description;
    };
  }
  $scope.yFunctionCategorieIssues = function() {
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

   $scope.xFunctionCcodeUfr = function() {
    return function(d) {
      return (d.ccode);
    };
  }
  $scope.yFunctionCcodeUfr = function() {
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