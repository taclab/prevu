'use strict';

angular.module('prevuApp')
  .controller('AuteurCtrl', function ($scope, $routeParams, $http, Books, prevuAPIservice) {

    console.log($routeParams.search);


    var getStats = function(data) {
      // Init Miso.DataSet
      var ds = new Miso.Dataset({data: data});
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
            years : this.mean('publicationyear').toFixed(2),
            pays : this.countBy('pays').toJSON(),
            langue : this.countBy('langue').toJSON()
          };
        }
      });
    };

    // Recherche des livres par auteur 
    $scope.search = function() {
      prevuAPIservice.searchBookByAuthor($scope.queryTerm.author_nom).success(function (response) {
        console.log(response)
        $scope.books = response.search;
        getStats(response.search);
      });
    };

    // Suggestion des authors
    $scope.suggestAuthors = function(val) {
      return $http.get('http://localhost:8888/prevu/application/api/author/search/'+val
        ).then(function(res){
          var authors = [];
          angular.forEach(res.data.search, function(item){
            authors.push(item);
          });
          return authors;
        });
    };
  });
