'use strict';
angular.module('prevuApp').controller('IssuesCtrl', function($scope, $rootScope, $routeParams, $location, $http, prevuAPIservice, ENV) {
  $rootScope.bodyClass = "viewLivre";
  $scope.searchLivreClass = "search-livre-open";
  /*== GET STATS ==*/
  var getStats = function(data) {
    // Init Miso.DataSet
    var ds = new Miso.Dataset({
      data: data
    });
    ds.fetch({
      success: function() {
        $scope.stats = {
          issues: this.length,
          renewals : this.sum('renewals'),
          sex: this.countBy('sex').toJSON(),
          ufr: this.countBy('Ufr').toJSON(),
          niveau: this.countBy('Niveau').toJSON(),
          etape: this.countBy('Etape').toJSON(),
          description: this.countBy('categorycode').toJSON()
        };

        $scope.statsIssueUfr = [{
          key: "Ufr",
          values : $scope.stats.ufr
        }]
        
        $scope.statsIssueNiveau = [{
          key: "Niveau",
          values : $scope.stats.niveau
        }]

      }
    });
  };

  /*== GET ISSUES BOOK FCT ==*/
  var getIssuesBook = function(biblionumber) {
    // GET issues
    prevuAPIservice.searchIssuesByBiblionumber(biblionumber).success(function(response) {
      $scope.issues = response;
      getStats(response);
      $location.search('biblionumber', biblionumber);
    });
    // GET Cover
    prevuAPIservice.getCoverBookAmazon(biblionumber).success(function(response) {
      $scope.covers = response;
    });
    // GET Average Age
    prevuAPIservice.getAverageByBiblionumber(biblionumber).success(function(response) {
      $scope.averageAge = response[0].averageAge;
    });


  }

  /*== GET INFO BOOK FCT ==*/
  var getInfoBook = function(biblionumber) {
    prevuAPIservice.getBookByBiblionumber(biblionumber).success(function(response) {
      $scope.info = response;
      
      // Si chargement par URL alors title 
      if (!$scope.queryTerm) {
        $scope.queryTerm = $scope.info.title;
        $scope.searchLivreClass = "search-livre-close";
      };
    });
  }

  /*== Suggestion des books ==*/
  $scope.suggestBooks = function(val) {
    return $http.get(ENV.apiEndpoint+'api/book/search/' + val).then(function(res) {
      var books = [];
      angular.forEach(res.data.search, function(item) {
        books.push(item);
      });
      return books;
    });
  };


  /*== SEARCH FCT ==*/
  $scope.search = function() {
    getIssuesBook($scope.queryTerm.biblionumber); // GET ISSUES BOOKS
    getInfoBook($scope.queryTerm.biblionumber); // GET INFO BOOKS
    $scope.searchLivreClass = "search-livre-close";
    $rootScope.bodyClass = null;
  };

  /*== Clear Input ==*/
  $scope.clearInput = function() {
    $scope.queryTerm = null;
    $scope.stats = null;
    $scope.isFocus = true;
  }

  // URL 
  var issueUrl = $location.search();
  if (issueUrl.biblionumber) {
    getIssuesBook(issueUrl.biblionumber); // GET ISSUES BOOKS
    getInfoBook(issueUrl.biblionumber); // GET INFO BOOKS
    $rootScope.bodyClass = null;

  }

});