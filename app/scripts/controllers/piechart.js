'use strict';

angular.module('prevuApp')

  .controller('PiechartCtrl', function ($scope) {
  var colorSchem = ['#2790b0','#c75233'];
  var colorViz = ['#8dd3c7','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f'];
  $scope.typePret = {
    "10BUP8":"PEB",
    "11BUP8":"Dépôts",
    "12BUP8":"Récolement",
    "13BUP8":"Collectivités",
    "1BUP8":"Accès simple",
    "2BUP8":"Prêt 2 livres",
    "3BUP8":"Prêt Normal",
    "4BUP8":"Prêt long",
    "5BUP8":"Doctorants",
    "6BUP8":"Etudiants IED",
    "7BUP8":"Lecteurs empêchés",
    "8BUP8":"Enseignants",
    "9BUP8":"Personnel BU",
    "INC":"A choisir"
  };

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
  $scope.yFunctionCategorie = function() {
    return function(d) {
      return parseInt(d.issues);
    };
  }  
  $scope.xFunction = function() {
    return function(d) {
      return d.sex;
    };
  }
  $scope.xFunctionCatCode = function() {
    return function(d) {
      return d.categorycode;
    };
  } 
  $scope.xFunctionLabel = function() {
    return function(d) {
      return d.label;
    };
  }
  $scope.yFunctionBorrowersUfr = function() {
    return function(d) {
      return d.value;
    };
  }
  $scope.xFunctionLabelTypePret = function() {
    return function(d) {
      return ($scope.typePret[d.label]) ? $scope.typePret[d.label] : d.label;
    };
  }  
  $scope.yFunction = function(t) {
    return function(d) {
      return d.issues;
    };
  }
 });
