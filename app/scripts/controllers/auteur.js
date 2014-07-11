'use strict';
angular.module('prevuApp').controller('AuteurCtrl', function($scope, $routeParams, $location, $http, Books, prevuAPIservice) {
  // Recupération des stats
  var getStats = function(data) {
    // Init Miso.DataSet
    var ds = new Miso.Dataset({
      data: data
    });
    ds.fetch({
      success: function() {
        $scope.stats = {
          docs: this.length,
          issues: this.sum('issues'),
          issuesMax: this.max('issues'),
          issuesMin: this.min('issues'),
          renewals: this.sum('renewals'),
          male: this.sum('Male'),
          female: this.sum('Female'),
          years: this.mean('publicationyear').toFixed(2),
          pays: this.countBy('pays').toJSON(),
          langue: this.countBy('langue').toJSON()
        };
        $scope.sexPie = [{
          sex: "Femme",
          count: $scope.stats.female
        }, {
          sex: "Homme",
          count: $scope.stats.male
        }]
      }
    });
  };
  /*== GET BOOK AUTHOR ==*/
  var getBookAuthor = function(authorQuery) {
    $scope.info = authorQuery;
    prevuAPIservice.getBookByAuthor(authorQuery).success(function(response) {
            console.log(getCoverBooks(response.search));

      // Recupération des livres
      $scope.books = response.search;
      // Génération des stats
      getStats(response.search);
      // Recupération des covers
      console.log(response.search);
    });
  }
  /*== GET COVER ==*/
  var booksCovers = [];
  var getCoverBooks = function(books) {
    $scope.booksCovers = [];
    angular.forEach(books, function(item) {
      prevuAPIservice.getCoverBookAmazon(item.biblionumber).success(function(response) {
        $scope.booksCovers.push({biblionumber : item.biblionumber, item : item, cover : response});
        console.log(booksCovers);
      });
      console.log(booksCovers);
    });
    console.log($scope.booksCovers);
  }
  // Recherche des livres par auteur 
  $scope.search = function() {
    getBookAuthor($scope.queryTerm);
    // Modification de l'url
    $location.search('nom', $scope.queryTerm.author_nom);
    $location.search('prenom', $scope.queryTerm.author_prenom);
  };
  /*==  Suggestion des authors ==*/
  $scope.suggestAuthors = function(val) {
    return $http.get('http://tactiques.org/prevu/application/api/author/search/' + val).then(function(res) {
      var authors = [];
      angular.forEach(res.data.search, function(item) {
        authors.push(item);
      });
      return authors;
    });
  };
  // URL
  var authorUrl = $location.search();
  if (authorUrl.nom) {
    getBookAuthor({
      author_nom: authorUrl.nom,
      author_prenom: authorUrl.prenom
    });
  }
});