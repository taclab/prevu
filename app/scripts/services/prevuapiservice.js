'use strict';

angular.module('prevuApp')
  .factory('prevuAPIservice', function ($http) {
    var prevuAPI = {};

    prevuAPI.searchAuthor =  function(author) {
      return $http({
        url : 'http://localhost:8888/prevu/application/api/author/search/'+author
      });
    };

    prevuAPI.searchBook =  function(title) {
      return $http({
        url : 'http://localhost:8888/prevu/application/api/book/search/'+title
      });
    };

    prevuAPI.searchBookByAuthor =  function(author) {
      return $http({
        url : 'http://localhost:8888/prevu/application/api/search/'+author
      });
    };



    prevuAPI.searchIssuesByTitle =  function(title) {
      return $http({
        url : 'http://localhost:8888/prevu/application/api/issues/title/'+title
      });
    };
    
    prevuAPI.getTopBooks =  function() {
      return $http({
        url : 'http://localhost:8888/prevu/application/api/books/top/'
      });
    };

    return prevuAPI;

  });
