'use strict';
angular.module('prevuApp').factory('prevuAPIservice', function($http) {
  var prevuAPI = {};
  var prevuAPI_url = 'http://localhost:8888/prevu/application/';
  prevuAPI.searchAuthor = function(author) {
    return $http({
      url: prevuAPI_url + 'api/author/search/' + author
    });
  };
  prevuAPI.searchBook = function(title) {
    return $http({
      url: prevuAPI_url + 'api/book/search/' + title
    });
  };
  prevuAPI.searchBookByAuthor = function(author) {
    return $http({
      url: prevuAPI_url + 'api/books/author/search/' + author
    });
  };
  prevuAPI.getBookByAuthor = function(author) {
    // return $http({
    //   method : 'POST',
    //   url : prevuAPI_url+'api/books/author',
    //   headers: {'Content-Type': 'application/json'},
    //   data : JSON.stringify(author)
    // });
    return $http({
      method: 'POST',
      url: prevuAPI_url + 'api/books/author',
      headers: {
        'Content-Type': 'application/json'
      },
      data: author
    });
  };
  prevuAPI.searchIssuesByTitle = function(title) {
    return $http({
      url: prevuAPI_url + 'api/issues/title/' + title
    });
  };
  prevuAPI.searchIssuesByBiblionumber = function(biblionumber) {
    return $http({
      url: prevuAPI_url + 'api/issues/biblionumber/' + biblionumber
    });
  };
  prevuAPI.getTopBooks = function() {
    return $http({
      url: prevuAPI_url + 'api/books/top/'
    });
  };
  // GET COVER IMAGE
  prevuAPI.getCoverBook = function(id) {
    return $http({
      url: prevuAPI_url + 'api/book/cover/' + id
    });
  };
  prevuAPI.getStatsIssuesAllByMonth = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/years/month'
    });
  };
  prevuAPI.getStatsIssuesAllByDay = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/years/day'
    });
  };
  return prevuAPI;
});