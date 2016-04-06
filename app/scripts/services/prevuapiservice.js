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
   //prevuAPI.getSexIssueAuthor = function() {
    //return $http({
     // url: prevuAPI_url + 'api/book/search/sex/author/'
   // });
  //};
 
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
   prevuAPI.getBookByAuthorCover = function(author) {
    return $http({
      method: 'POST',
      url: prevuAPI_url + 'api/books/author/issues/cover',
      headers: {
        'Content-Type': 'application/json'
      },
      data: author
    });
  };

    prevuAPI.getBookByAuthorIssuesSex = function(author) {
    return $http({
      method: 'POST',
      url: prevuAPI_url + 'api/books/author/issues/sex',
      headers: {
        'Content-Type': 'application/json'
      },
      data: author
    });
  };
   prevuAPI.getBookByAuthorIssuesPays = function(author) {
    return $http({
      method: 'POST',
      url: prevuAPI_url + 'api/books/author/issues/pays',
      headers: {
        'Content-Type': 'application/json'
      },
      data: author
    });
  };

  prevuAPI.getBookByAuthorIssuesLangue = function(author) {
    return $http({
      method: 'POST',
      url: prevuAPI_url + 'api/books/author/issues/langue',
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
    prevuAPI.searchIssuesByBiblionumbersexcategorie = function(biblionumber) {
    return $http({
      url: prevuAPI_url + 'api/issues/biblionumber/sexcategorie/' + biblionumber
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
   //empruntCategorie
    prevuAPI.getIssuesByCategorie = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/categorie'
    });
  };

    //emprunt Semestre
    prevuAPI.getIssuesBySemestre = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/years/semestre'
    });
  };

    //emprunt book par Semestre au moin une fois
    prevuAPI.getIssuesBookBySemestre = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/book/years/semestre'
    });
  };
    //nombre emprunteur qui ont pris au moin un livre par Semestre au moin une fois
    prevuAPI.getIssuesBorrowernumberBySemestre = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/borrower/years/semestre'
    });
  };
 //total ufr
    prevuAPI.getTotalUfr = function() {
    return $http({
      url: prevuAPI_url + 'api/totalUfr'
    });
  };
   //total ufr
    prevuAPI.getTotalUfrSeule = function() {
    return $http({
      url: prevuAPI_url + 'api/totalUfrSeule'
    });
  };


  //total borrowers
    prevuAPI.getTotalBorrowers = function() {
    return $http({
      url: prevuAPI_url + 'api/totalBorrowers'
    });
  };
  //total issues
    prevuAPI.getTotalIssues = function() {
    return $http({
      url: prevuAPI_url + 'api/totalIssues'
    });
  };
  //total books
    prevuAPI.getTotalBooks = function() {
    return $http({
      url: prevuAPI_url + 'api/totalBooks'
    });
  };
  //Moyenne age total
    prevuAPI.getMoyenneAgeBorrower = function() {
    return $http({
      url: prevuAPI_url + 'api/borrowers/averageAge'
    });
  };
  
   //emprunt selon sex
    prevuAPI.getIssuesBySex = function() {
    return $http({
      url: prevuAPI_url + 'api/issues/sex'
    });
  };
   //issues ufr selon  CCODE ufr
  prevuAPI.getIssuesCcodeUfr = function(ufr) {
    return $http({
      url: prevuAPI_url + 'api/issues/ufr/ccode/'+ufr
    });
  };
   //emprunt selon sex
    prevuAPI.getIssuesBySexUfr = function(ufr) {
    return $http({
      url: prevuAPI_url + 'api/issues/ufr/sex/'+ufr
    });
  };
  prevuAPI.getIssuesMonthUfr = function(ufr) {
    return $http({
      url: prevuAPI_url + 'api/issues/ufr/month/'+ufr
    });
  };


   //emprunt selon ufr
    prevuAPI.getIssuesByUfr = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/ufr'
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

    //vidette matière les plus populaires selon l'année
  prevuAPI.getIssuesMatiere = function(year) {
    return $http({
      url: prevuAPI_url + 'api/issues/matiere/'+year
    });
  }; 
  //nombres d'emprunt par mois selon l'année
  prevuAPI.getIssuesAllByMonthYear = function(year) {
    return $http({
      url: prevuAPI_url + 'api/stats/issues/years/month/'+year
    });
  };
   //couverture des livre les plus populaire par ufr

  prevuAPI.getCoverIssuesByUfr = function(ufr) {
    return $http({
      url: prevuAPI_url + 'api/stats/cover/ufr/'+ufr
    });
  };

    //issues niveau selon  month semestre
  prevuAPI.getIssuesMonthNiveau = function(semestre) {
    return $http({
      url: prevuAPI_url + 'api/issues/niveau/month/'+semestre
    });
  };
    prevuAPI.getIssuesMonthMatiere = function(year) {
    return $http({
      url: prevuAPI_url + 'api/issues/matiere/month/'+year
    });
  };
 
  
      //livre populaire selon  ufr
  prevuAPI.getTopCouvByUfr = function(ufr) {
    return $http({
      url: prevuAPI_url + 'api/stats/cover/ufr/'+ufr
    });
  }; 
 prevuAPI.getTopCouv = function() {
    return $http({
      url: prevuAPI_url + 'api/issues/livre/'
    });
  };
  //toutes les années d'emprunts
    prevuAPI.getYears = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/years'
    });
  }; 
     prevuAPI.getSemestres = function() {
    return $http({
      url: prevuAPI_url + 'api/stats/semestres'
    });
  };  
 

  return prevuAPI;
});