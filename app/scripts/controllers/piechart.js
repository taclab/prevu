'use strict';

angular.module('prevuApp')
  .controller('PiechartCtrl', function ($scope) {
  $scope.xFunction = function() {
    return function(d) {
      return d.label;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d.y;
    };
  }
 });
