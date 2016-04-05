'use strict';
angular.module('prevuApp').controller('LinechartCtrl', function($scope) {
  var colorSchem = ['#2790b0','#79b5ac'];
  var colorViz = ['#8dd3c7','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69']
  $scope.colorFunction = function() {
  return function(d, i) {
      return colorSchem[i];
    };
  }
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
$scope.xFunctionSemestreIssues = function() {
    return function(d) {
      return (d.year);
    };
  }
  $scope.yFunctionSemestreIssues = function(t) {
    return function(d) {
      return d3.round(d.issues);
    };
  }
  $scope.xFunctionSemestreBook = function() {
    return function(d) {
      return d.year;
    };
  }
  $scope.yFunctionSemestreBook = function(t) {
    return function(d) {
      return d3.round(d.totalbook);
    };
  }

  $scope.xFunctionSemestreBorrower = function() {
    return function(d) {
      return d.year;
    };
  }
  $scope.yFunctionSemestreBorrower = function(t) {
    return function(d) {
      return d3.round(d.borrowernumber);
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
   $scope.toolTipContentFunctionSemestreIssues = function() {
    return function(key, x, y, e, graph) {
      return  '<h3>' + e.point.issues + '</h3> <span> Année ' +e.point.year+'</span>';
    }
  }

    $scope.toolTipContentFunctionSemestreBook = function() {
    return function(key, x, y, e, graph) {
      return  '<h3>' + e.point.totalbook + '</h3> <span> Année ' +e.point.year+'</span>';
    }
  }
    $scope.toolTipContentFunctionSemestreBorrower = function() {
    return function(key, x, y, e, graph) {
      return  '<h3>' + e.point.borrowernumber + '</h3> <span> Année ' +e.point.year+'</span>';
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