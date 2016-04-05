'use strict';
angular.module('prevuApp').controller
('LinechartEmpruntlCtrl', function($scope) {
  var colorSchem = ['#2790b0','#79b5ac'];
  var colorViz = ['#8dd3c7','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69']
  $scope.colorFunction = function() {
  return function(d, i) {
      return colorSchem[i];
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
  
$scope.xAxisTickFormatFunction = function() {
    return function(d) {
      return d3.time.format('%d-%b-%y')(new Date(d * 1000));
    }
  }
  $scope.toolTipContentFunction = function() {
    return function(key, x, y, e, graph) {
      return  '<h3>' + e.point.name + '</h3><span>'+e.point.value+'</span>';
    }
  }
  $scope.toolTipContentFunctionUFR = function() {
    return function(key, x, y, e, graph) {
      return  '<h3>' + e.point.Ufr + '</h3>'+e.point.issues+' '+ d3.time.format('%b-%y')(new Date(e.point.issuesdate * 1000))
    }
  }
  $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      return d3.format(',d')(d);
    }
  }
});