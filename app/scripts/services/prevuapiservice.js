'use strict';

angular.module('prevuApp')
  .factory('prevuAPIservice', function ($http) {
    var prevuAPI = {};

    prevuAPI.searchAuthor =  function(author) {
      return $http({
        url : 'http://localhost:8888/prevu/application/api/search/'+author
      });
    };

    prevuAPI.searchIssuesByTitle =  function(title) {
      return $http({
        url : 'http://localhost:8888/prevu/application/api/issues/title/'+title
      });
    };
    
    return prevuAPI;

  });
