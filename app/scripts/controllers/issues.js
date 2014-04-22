'use strict';

angular.module('prevuApp')
  .controller('IssuesCtrl', function ($scope, $routeParams, prevuAPIservice) {

		$scope.search = function() {
			if ($scope.queryTerm.length > 4) {
				console.log($scope.queryTerm);
				prevuAPIservice.searchIssuesByTitle($scope.queryTerm).success(function (response) {
					console.log(response.issues);
					$scope.issues = response.issues;
				});
		  }
    };
  });
