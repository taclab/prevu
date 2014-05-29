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

    // Recupération des stats
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

          $scope.sexPie = [
            { sex : "Femme", count : $scope.stats.female }, 
            { sex : "Homme", count : $scope.stats.male }  
          ]
          // $scope.paysPie = [
          //   {pays : 'fr', count : 5},
          //   {pays : 'en', count : 5}
          // ]
          // $scope.langue = $scope.stats.langue;
          // console.log($scope.stats.langue);

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

  $scope.exampleData = [
       { key: "One", y: 5 },
          { key: "Two", y: 2 },
          { key: "Three", y: 9 },
          { key: "Four", y: 7 },
          { key: "Five", y: 4 },
          { key: "Six", y: 3 },
          { key: "Seven", y: 9 }
      ];

  });
