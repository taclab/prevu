'use strict';

angular.module('prevuApp')
  .controller('IssuesCtrl', function ($scope, $routeParams, $http, prevuAPIservice) {

    var getStats = function(data) {
      // Init Miso.DataSet
      var ds = new Miso.Dataset({data: data});
      ds.fetch({
        success: function() {
          $scope.stats = {
            issues : this.length,
            sex : this.countBy('sex').toJSON(),
            ufr : this.countBy('Ufr').toJSON(),
            niveau : this.countBy('Niveau').toJSON(),
            etape : this.countBy('Etape').toJSON(),
            description : this.countBy('categorycode').toJSON()
          };
        }
      });
    };


    $scope.search = function() {
      // prevuAPIservice.searchIssuesByTitle($scope.queryTerm.title).success(function (response) {
      //   $scope.issues = response.issues;
      //   getStats(response);
      // });
      prevuAPIservice.searchIssuesByBiblionumber($scope.queryTerm.biblionumber).success(function (response) {
        console.log(response);
        $scope.issues = response;
        getStats(response);
      });
    };

	// Suggestion des books
 	$scope.suggestBooks = function(val) {
 	  return $http.get('http://localhost:8888/prevu/application/api/book/search/'+val
 	    ).then(function(res){
 	      var books = [];
 	      angular.forEach(res.data.search, function(item){
 	        books.push(item);
 	      });
 	      return books;
 	    });
 	};

  });
