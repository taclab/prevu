'use strict';

angular.module('prevuApp')
  .factory('prevuAPIservice', function ($http) {
    var prevuAPI = {};

    prevuAPI.searchAuthor =  function(author) {
      return $http({
        url : 'http://localhost:8888/angular/prevu/api/search/'+author
      });
    }

    return prevuAPI;

  });
