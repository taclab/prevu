'use strict';

angular.module('prevuApp')
  .controller('ExperimentCtrl', function ($scope, prevuAPIservice) {

  prevuAPIservice.getStatsMain().success(function(response) {


  	    // ==================
    // ALL ISSUES GROUPED UFR & NIVEAU
    $scope.issues_ufr = response[0].issues_ufr;
    $scope.issues_niveau = response[0].issues_niveau;
  });
  prevuAPIservice.getStatsIssuesAllByDay().success(function(response) {
    $scope.statsIssuesAllByDay = [{
      key: "Prêts",
      values: response.stats
    }]
  });


 });
