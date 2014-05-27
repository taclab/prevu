'use strict';

angular.module('prevuApp')
  .controller('AuteurCtrl', function ($scope, $routeParams, $location, $http, Books, prevuAPIservice) {

    // Si parametre URL
    var authorUrl = $location.search();
    if (authorUrl.nom) {
      prevuAPIservice.getBookByAuthor({author_nom : authorUrl.nom, author_prenom : authorUrl.prenom}).success(function (response) {
        // Recupération des livres
        $scope.books = response.search;
        // Génération des stats
        getStats(response.search);
      });
    }


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
      console.log($scope.queryTerm);
      prevuAPIservice.getBookByAuthor($scope.queryTerm).success(function (response) {
        // Recupération des livres
        $scope.books = response.search;
        // Génération des stats
        getStats(response.search);
        // Modification de l'url
        $location.search('nom', $scope.queryTerm.author_nom);
        $location.search('prenom', $scope.queryTerm.author_prenom);
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
