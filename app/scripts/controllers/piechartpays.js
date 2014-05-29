'use strict';

angular.module('prevuApp')
  .controller('PiechartpaysCtrl', function ($scope) {
  $scope.xFunction = function() {
    return function(d) {
      return d.pays;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d.count;
    };
  }
 });
