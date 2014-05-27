'use strict';
angular.module('prevuApp').controller('IssuesCtrl', function($scope, $routeParams, $location, $http, prevuAPIservice) {
  var issueUrl = $location.search();
  if (issueUrl.biblionumber) {
    prevuAPIservice.searchIssuesByBiblionumber(issueUrl.biblionumber).success(function(response) {
      $scope.issues = response;
      getStats(response);
    });
  }
  var getStats = function(data) {
    // Init Miso.DataSet
    var ds = new Miso.Dataset({
      data: data
    });
    ds.fetch({
      success: function() {
        $scope.stats = {
          issues: this.length,
          sex: this.countBy('sex').toJSON(),
          ufr: this.countBy('Ufr').toJSON(),
          niveau: this.countBy('Niveau').toJSON(),
          etape: this.countBy('Etape').toJSON(),
          description: this.countBy('categorycode').toJSON()
        };
      }
    });
  };

  $scope.search = function() {
    prevuAPIservice.searchIssuesByBiblionumber($scope.queryTerm.biblionumber).success(function(response) {
      $scope.issues = response;
      getStats(response);
      $location.search('biblionumber', $scope.queryTerm.biblionumber);
    });
  };
  // Suggestion des books
  $scope.suggestBooks = function(val) {
    return $http.get('http://localhost:8888/prevu/application/api/book/search/' + val).then(function(res) {
      var books = [];
      angular.forEach(res.data.search, function(item) {
        books.push(item);
      });
      return books;
    });
  };
});