'use strict';

angular.module('prevuApp')
  .controller('AuteurCtrl', function ($scope, $routeParams, Books, prevuAPIservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($routeParams.search);
    var getStats = function() {
      prevuAPIservice.searchAuthor($scope.queryTerm).success(function (response) {
        // Init Miso.DataSet
        var ds = new Miso.Dataset({data: response.search});
        ds.fetch({
          success: function() {
            $scope.stats = {
              docs : this.length,
              issues : this.sum('issues'),
              issuesMax : this.max('issues'),
              issuesMin : this.min('issues'),
              renewals : this.sum('renewals'),
              male : this.sum('Male'),
              female : this.sum('Female'),
              years : this.mean('publicationyear').toFixed(2)
            };
          }
        });
      });
    };

    // SEARCH 
    $scope.search = function() {
      if ($scope.queryTerm.length > 4) {
        var books = new Books();
        books.$get({auteurName: $scope.queryTerm});
        $scope.books = books;
        getStats();
      }
    };


  });
