'use strict';

angular
  .module('prevuApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'nvd3ChartDirectives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/auteur', {
        templateUrl: 'views/auteur.html',
        controller: 'AuteurCtrl',
        reloadOnSearch: false
      })
      .when('/livre', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl',
        reloadOnSearch: false
      })
      .when('/experiment', {
        templateUrl: 'views/experiment.html',
        controller: 'ExperimentCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  });
