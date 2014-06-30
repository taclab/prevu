'use strict';
angular.module('prevuApp').controller('DiscretebarchartCtrl', function($scope) {
  $scope.xFunction = function() {
    return function(d) {
      return d.month + '/' + d.year;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d3.round(d.issues);
    };
  }
  $scope.xFunctionUfr = function() {
    return function(d) {
      return d.Ufr;
    };
  }
  $scope.yFunctionUfr = function(t) {
    return function(d) {
      return d3.round(d.count);
    };
  }
  $scope.xFunctionNiveau = function() {
    return function(d) {
      return d.ccode;
    };
  }
  $scope.yFunctionNiveau = function(t) {
    return function(d) {
      return d3.round(d.count);
    };
  }  
  $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      var fmt = d3.format('r0');
      return fmt(d);
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