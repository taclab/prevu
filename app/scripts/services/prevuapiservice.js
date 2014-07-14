'use strict';
angular.module('prevuApp').factory('prevuAPIservice', function($http, ENV) {
  var prevuAPI = {};
  //var prevuAPI_url = 'http://localhost:8888/prevu/application/';
  //var prevuAPI_url = 'http://tactiques.org/prevu/application/';
  var prevuAPI_url = ENV.apiEndpoint;
  console.log(prevuAPI_url);
  prevuAPI.getBookByBiblionumber = function(biblionumber) {
    return $http({
      url: prevuAPI_url + 'api/book/' + biblionumber
    });
  };
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
  prevuAPI.getAverageByBiblionumber = function(biblionumber) {
    return $http({
      url: prevuAPI_url + 'api/issues/biblionumber/' + biblionumber + '/averageAge'
    });
  };
  prevuAPI.getTopBooks = function() {
    return $http({
      url: prevuAPI_url + 'api/books/top/'
    });
  };
  // GET COVER IMAGE
  prevuAPI.getCoverBookAmazon = function(biblionumber) {
    return $http({
      url: prevuAPI_url + 'api/amazon/getCover.php?biblionumber=' + biblionumber
    });
  };
  prevuAPI.getCoverBook = function(id) {
    return $http({
      url: prevuAPI_url + 'api/book/cover/' + id
    });
  };
  prevuAPI.getMultipleCoverBook = function(biblionumbers) {
    return $http({
      method: 'POST',
      url: prevuAPI_url + 'api/amazon/getMultipleCover.php',
      headers: {
        'Content-Type': 'application/json'
      },
      data: biblionumbers
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
  prevuAPI.getStatsIssuesAllByMonthAverageNiveau = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/years/month/niveau'
    });
  };
  prevuAPI.getStatsIssuesAllByDayAverageNiveau = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/years/day/niveau'
    });
  };
  prevuAPI.getTopIssuesByUfr = function(ufr) {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/ufr/'+ufr
    });
  };
  prevuAPI.getStatsMain = function(ufr) {
    return $http({
      url: prevuAPI_url + 'api/statsJson/stats.json'
    });
  };  

  return prevuAPI;
});