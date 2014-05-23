'use strict';

angular.module('prevuApp')
  .factory('prevuAPIservice', function ($http) {
    var prevuAPI = {};
    var prevuAPI_url = "http://localhost:8888/prevu/application/"

    prevuAPI.searchAuthor =  function(author) {
      return $http({
        url : prevuAPI_url+'api/author/search/'+author
      });
    };

    prevuAPI.searchBook =  function(title) {
      return $http({
        url : prevuAPI_url+'api/book/search/'+title
      });
    };

    prevuAPI.searchBookByAuthor =  function(author) {
      return $http({
        url : prevuAPI_url+'api/books/author/search/'+author
      });
    };

    prevuAPI.searchIssuesByTitle =  function(title) {
      return $http({
        url : prevuAPI_url+'api/issues/title/'+title
      });
    };
    
    prevuAPI.getTopBooks =  function() {
      return $http({
        url : prevuAPI_url+'api/books/top/'
      });
    };

    // GET COVER IMAGE
    prevuAPI.getCoverBook =  function(id) {
      return $http({
        url : prevuAPI_url+'api/book/cover/'+id
      });
    };

    return prevuAPI;

  });
