'use strict';
angular.module('prevuApp').controller('AuteurCtrl', function($scope, $rootScope, $routeParams, $location, $http, Books, prevuAPIservice, ENV) {
  $rootScope.bodyClass = "viewBook";
  $scope.searchAuthorClass = "search-author-open";
  $scope.isFocus = true; // Focus de l'input
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
      // Recupération des livres
      $scope.books = response.search;
      // Génération des stats
      getStats(response.search);
    });
  }
  /*== GET COVER ==*/
  var booksCovers = [];
  var getCoverBooks = function(books) {
    $scope.booksCovers = [];
    angular.forEach(books, function(item) {
      prevuAPIservice.getCoverBookAmazon(item.biblionumber).success(function(response) {
        $scope.booksCovers.push({biblionumber : item.biblionumber, item : item, cover : response});
      });
    });
  }
  // Recherche des livres par auteur 
  $scope.search = function() {
    //http://tympanus.net/codrops/2013/06/26/expanding-search-bar-deconstructed/
    // http://tympanus.net/Development/MinimalForm/
    getBookAuthor($scope.queryTerm);
        $scope.isFocus = false;

    // Modification de l'url
    $location.search('nom', $scope.queryTerm.author_nom);
    $location.search('prenom', $scope.queryTerm.author_prenom);
    // Insertion de l'auteur
    $scope.queryTerm = $scope.queryTerm.author_nom+' '+$scope.queryTerm.author_prenom;
    $scope.searchAuthorClass = "search-author-close"; // Ajout de la classe 
  };
  /*==  Suggestion des authors ==*/
  $scope.suggestAuthors = function(val) {
    return $http.get(ENV.apiEndpoint+'api/author/search/' + val).then(function(res) {
      var authors = [];
      angular.forEach(res.data.search, function(item) {
        authors.push(item);
      });
      return authors;
    });
  };

  $scope.clearInput = function() {
    $scope.queryTerm = null;
    $scope.stats = null;
    $scope.isFocus = true;
  }

  // URL
  var authorUrl = $location.search();
  if (authorUrl.nom) {
    getBookAuthor({
      author_nom: authorUrl.nom,
      author_prenom: authorUrl.prenom
    });
    $scope.searchAuthorClass = "search-author-close"; // Ajout de la classe 
    $scope.queryTerm = authorUrl.nom+' '+authorUrl.prenom;
    $scope.isFocus = false;
  }
});

// A intégrer Angular
angular.module('prevuApp').directive('focusMe', function($timeout, $parse) {
  return {
    //scope: true,   // optionally create a child scope
    link: function(scope, element, attrs) {
      var model = $parse(attrs.focusMe);
      scope.$watch(model, function(value) {
        if(value === true) { 
          $timeout(function() {
            element[0].focus(); 
          });
        }
      });
      // to address @blesh's comment, set attribute value to 'false'
      // on blur event:
      element.bind('blur', function() {
         scope.$apply(model.assign(scope, false));
      });
    }
  };
});