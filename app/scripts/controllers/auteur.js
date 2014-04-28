'use strict';

angular.module('prevuApp')
  .controller('AuteurCtrl', function ($scope, $routeParams, $http, Books, prevuAPIservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($routeParams.search);
    var getStats = function() {
      prevuAPIservice.searchAuthor($scope.queryTerm.author_nom).success(function (response) {
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
      console.log($scope.queryTerm.author_nom);
      var books = new Books();
      books.$get({auteurName: $scope.queryTerm.author_nom});
      $scope.books = books;
      getStats();
    };

    $scope.getLocation = function(val) {
      return $http.get('http://localhost:8888/prevu/application/api/author/search/'+val
        ).then(function(res){
          console.log(res);
          var authors = [];
          angular.forEach(res.data.search, function(item){
            authors.push(item);
          });
          console.log(authors);
          return authors;
        });
    };
  });
