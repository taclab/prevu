'use strict';

angular.module('prevuApp')
  .controller('PiechartlangueCtrl', function ($scope) {
 var colorSchem = ['#2790b0','#c75233'];
  var colorViz = ['#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f','#8dd3c7','#bebada','#fb8072'];    
    $scope.color_schem = function() {
  return function(d, i) {
      return colorSchem[i];
    };
  }
  $scope.color_viz = function() {
  return function(d, i) {
      return colorViz[i];
    };
  }  
  $scope.xFunction = function() {
    return function(d) {
      return d.langue;
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d.issues;
    };
  }
});
