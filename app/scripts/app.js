'use strict';

angular
  .module('prevuApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/auteur', {
        templateUrl: 'views/auteur.html',
        controller: 'AuteurCtrl'
      })
      .when('/auteur/:search', {
        templateUrl: 'views/auteur.html',
        controller: 'AuteurCtrl'
      })
      .when('/livre', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
