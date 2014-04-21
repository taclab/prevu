'use strict';

angular.module('prevuApp')
  .controller('AuteurCtrl', function ($scope, Books) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



    $scope.search = function() {
      if ($scope.queryTerm.length > 4) {
          var books = new Books();
          books.$get({auteurName: $scope.queryTerm});
          $scope.books = books;
    		}
    };

  });
