'use strict';
angular.module('prevuApp').controller('IssuesCtrl', function($scope, $routeParams, $location, $http, prevuAPIservice) {

  /*== GET STATS ==*/
  var getStats = function(data) {
    console.log(data);
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
  }

  /*== GET INFO BOOK FCT ==*/
  var getInfoBook = function(biblionumber) {
    prevuAPIservice.getBookByBiblionumber(biblionumber).success(function(response) {
      $scope.info = response;
      console.log(response);
    });
  }

  /*== Suggestion des books ==*/
  $scope.suggestBooks = function(val) {
    return $http.get('http://localhost:8888/prevu/application/api/book/search/' + val).then(function(res) {
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
    console.log($scope.queryTerm);
  };

  // URL 
  var issueUrl = $location.search();
  if (issueUrl.biblionumber) {
    getIssuesBook(issueUrl.biblionumber); // GET ISSUES BOOKS
    getInfoBook(issueUrl.biblionumber); // GET INFO BOOKS
    //$scope.queryTerm =$scope.info;
  }

});