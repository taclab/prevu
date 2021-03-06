'use strict';
angular.module('prevuApp').controller('DiscretebarchartCtrl', function($scope) {
  var colorArray = ['#2790b0','#79b5ac'];
  $scope.colorFunction = function() {
  return function(d, i) {
      return colorArray[i];
    };
  }

  $scope.xAxisTickFormatFunction = function() {
    return function(d) {
      return d3.time.format('%b-%y')(new Date(d * 1000));
    }
  }
  $scope.toolTipContentFunction = function() {
    return function(key, x, y, e, graph) {
      return  '<h3>'+e.point.issues+' prêts</h3><span>' + d3.time.format('%B-%y')(new Date(e.point.issuesdate * 1000)) + '</span>'; 
    }
  }
  $scope.format = function() {
    return function(d) {
      var fmt = d3.format('r0');
      return fmt(d);
    }
  }
  $scope.render = function() {
    console.log("render:");
    // our custom d3 code
  }
  $scope.$on('renderEnd.directive', function(angularEvent, event){
        console.log(event);
  });
  $scope.$on('$viewContentLoaded', function() {
      console.log("render");
  });
});

angular.module('prevuApp').directive('spinLoader', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<span class="{{ loading }}"></span><div ng-transclude ></div>'
    };
});

angular.module('prevuApp').directive('onFinishRender', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      if (scope.$last === true) {
          scope.$evalAsync(attr.onFinishRender);
      }
    }
  }
});