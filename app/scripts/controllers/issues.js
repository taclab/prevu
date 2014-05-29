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


        $scope.statsIssueUfr = [{
          key: "Ufr",
          values : $scope.stats.ufr
        }]
        console.log($scope.statsIssueUfr);

      }
    });
  };

 $scope.exampleData = [
                {
                    "key": "Series 1",
                    "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] ]
                }
            ];



  console.log($scope.exampleData);



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