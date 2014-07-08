'use strict';
//http://stackoverflow.com/questions/14748449/angular-js-using-bootstrap-and-dynamically-creating-rows
angular.module('prevuApp').controller('MainCtrl', function($scope, $filter, prevuAPIservice) {
    $scope.listUfr = {
    "AESECOGES" : "UFR AES, ÉCONOMIE ET GESTION",
    "ARTS" : "UFR ARTS, PHILOSOHIE, ESTHÉTIQUE",
    "CC" : "UFR CULTURE ET COMMUNICATION",
    "DROIT" : "UFR DROIT",
    "ED 031" : "ED PRATIQUES ET THÉORIES DU SENS",
    "ED 159" : "ED ESTHÉTIQUE, SC. ET TECHNO. DES ARTS",
    "ED 224" : "ED COGNITION, LANGAGE, INTERACTION",
    "ED 401" : "ED SCIENCES SOCIALES",
    "Form. perm" : "FORMATION PERMANENTE",
    "IED" : "INSTITUT D'ENSEIGNEMENT À DISTANCE",
    "IEE" : "INSTITUT D'ETUDES EUROPÉENNES",
    "IFG" : "INSTITUT FRANÇAIS DE GÉOPOLITIQUE",
    "IPT" : "INFORMATIQUE POUR TOUS",
    "IUT MONTR" : "IUT DE MONTREUIL",
    "IUT TREMBL" : "IUT DE TREMBLAY-EN-FRANCE",
    "LLCE-LEA" : "UFR LLCE-LEA",
    "MITSIC" : "UFR M.I.T.S.I.C",
    "PSYCHO" : "UFR DE PSYCHOLOGIE",
    "SDL" : "UFR SCIENCES DU LANGAGE",
    "SEPF" : "UFR SCIENCES ÉDUCATION, PSYCHANALYSE,FLE",
    "SUFICE" : "SUFICE",
    "T&S" : "UFR TEXTES ET SOCIÉTÉS.",
    "TES" : "UFR TERRITOIRES, ENVIRONNEMENTS,SOCIÉTÉS"
    };
  // GET TOP BOOKS
  prevuAPIservice.getTopBooks().success(function(responseBook) {
    var counter = 1; // Counter pour le top
    // Ajout des metas données Amazon ResponseBook
    angular.forEach(responseBook.books, function(book) {
      book.top = counter;
      // GET AMAZON
      prevuAPIservice.getCoverBook(book.biblionumber).success(function(responseCover) {
        book.TinyImage = responseCover.TinyImage;
        book.LargeImage = responseCover.LargeImage;
        book.MediumImage = responseCover.MediumImage;
        book.Edito = responseCover.Edito;
      });
      counter++;
    });
    $scope.topBooks = responseBook.books;
    //$scope.topBooksGroup = $filter('groupBy')(responseBook.books, 3);
    //$scope.topBooks = responseBook.books;
    // GET STATS
    var ds = new Miso.Dataset({
      data: responseBook.books
    });
    ds.fetch({
      success: function() {
        $scope.stats = {
          docs: this.length,
          issues: this.sum('issues'),
          issuesMax: this.max('issues'),
          issuesMin: this.min('issues'),
          renewals: this.sum('renewals'),
          male: this.sum('Male'),
          female: this.sum('Female'),
          years: this.mean('publicationyear').toFixed(2),
          pays: this.countBy('pays').toJSON(),
          langue: this.countBy('langue').toJSON(),
          ccode: this.countBy('ccode').toJSON()
        };
      }
    });
  });
  // // Récupération des meta donnes Amazon
  // function getCover (array) {
  //     // Faire une requete sql en tableau
  //     prevuAPIservice.getCoverBook(array).success(function (responseCover) {
  //         console.log(responseCover);
  //         return responseCover;
  //     });
  // }
  //unescape(string)
  // $scope.topBooks = function() {
  //    console.log("te");
  //   prevuAPIservice.getTopBooks().success(function (response) {
  //     //$scope.books = response;
  //     console.log(response);
  //     return response;
  //   });
  // };
  //topBooks();
  prevuAPIservice.getStatsIssuesAllByMonth().success(function(response) {
    $scope.statsIssuesAllByMonth = [{
      key: "Prêts",
      "area": true,
      values: response.stats
    }]
  });
  prevuAPIservice.getTopIssuesByUfr('DROIT').success(function(response) {
    //console.log(response);
  });
  //==== REQUETES STATS MAIN ====//
  prevuAPIservice.getStatsMain().success(function(response) {
    // ==================    
    // BOOK COUNT GRAPH
    $scope.books_count_graph = [{
      "key": "books_count_graph",
      "area": true,
      "values": response[0].books_count_graph
    }];
    // ==================
    // ISSUES COUNT GRAPH
    $scope.issues_count_graph = [{
      "key": "issues_count_graph",
      "area": true,
      "values": response[0].issues_count_graph
    }];
    // ==================
    // BORROWERS COUNT GRAPH
    $scope.borrowers_count_graph = [{
      "key": "borrowers_count_graph",
      "area": true,
      "values": response[0].borrowers_count_graph
    }];
    // ==================
    // PRETS NIVEAU
    // Génération des input selecteur pour les durées
    $scope.semestres = [{
      name: 'Semestre 2 - 2012',
      id: 'Semestre2012'
    }, {
      name: 'Semestre 1 - 2013',
      id: 'Semestre2012-2013_1'
    }, {
      name: 'Semestre 2 - 2013',
      id: 'Semestre2012-2013_2'
    }, {
      name: 'Semestre 1 - 2014',
      id: 'Semestre2013-2014'
    }];
    $scope.selectedSemestre = $scope.semestres[1]; // Par default
    // Premier test pour le choix de données
    $scope.issues_niveau_light = response[0].issues_niveau_light[$scope.semestres[1].id]; // Par défault 
    $scope.setSemestre_issues_niveau_light = function(sem) {
      $scope.issues_niveau_light = response[0].issues_niveau_light[sem.id];
    };
    function getArrayByKey(arr, key) {
      for (var d = 0, len = arr.length; d < len; d += 1) {
        if (arr[d].key === key) {
          return arr[d];
        }
      }
    }
    // ==================
    // CARTOUCHE UFR -> Livres + populaires
    $scope.ByUfr_books = response[0].ByUfr.books; // Les 10 livres les plus populaires dans une ufr
    $scope.ByUfr_ccode = response[0].ByUfr.ccode; // Les Ccode les plus populaires
    // Génération des Selects pour les UFR
    var ufrKeys = new Array();
    angular.forEach(response[0].ByUfr.books, function(ufr) {
      ufrKeys.push({
        name: ($scope.listUfr[ufr.key]) ? $scope.listUfr[ufr.key] : ufr.key ,
        key: ufr.key
      });
    });
    $scope.ufrKeys = ufrKeys;
    $scope.selectedUFR = {};
    $scope.selectedUFR.selected = $scope.ufrKeys[1]; // Select par défault
    // Données pour le horizontal bar
    $scope.ByUfr_ccode = [{
      key: $scope.ufrKeys[1].key,
      values: response[0].ByUfr.ccode[$scope.ufrKeys[1].key].values.slice(0, 10)
    }];
    $scope.ByUfr_books = response[0].ByUfr.books[$scope.ufrKeys[1].key];
    $scope.issues_ufrOnlyUfr = [getArrayByKey(response[0].issues_ufr, $scope.ufrKeys[1].key)];
    $scope.ByUfr_borrowers_sex = response[0].ByUfr.borrowers_sex[$scope.ufrKeys[1].key].values;
    $scope.ByUfr_borrowers_age = response[0].ByUfr.borrowers_age[$scope.ufrKeys[1].key];
    $scope.ByUfr_issues_numbers = response[0].ByUfr.issues_numbers[$scope.ufrKeys[1].key];
    $scope.ByUfr_borrowers_numbers = response[0].ByUfr.borrowers_numbers[$scope.ufrKeys[1].key];


    // Changement des données apres SELECT
    $scope.setUfr = function(ufr) {
      $scope.ByUfr_books = response[0].ByUfr.books[ufr.key];
      $scope.ByUfr_ccode = [{
        key: ufr.key,
        values: response[0].ByUfr.ccode[ufr.key].values.slice(0, 10)
      }];
      $scope.issues_ufrOnlyUfr = [getArrayByKey(response[0].issues_ufr, ufr.key)];
      $scope.ByUfr_borrowers_sex = response[0].ByUfr.borrowers_sex[ufr.key].values;
      $scope.ByUfr_borrowers_age = response[0].ByUfr.borrowers_age[ufr.key];
      $scope.ByUfr_issues_numbers = response[0].ByUfr.issues_numbers[ufr.key];
      $scope.ByUfr_borrowers_numbers = response[0].ByUfr.borrowers_numbers[ufr.key];

    }
  });
});
// filtre
angular.module('prevuApp').filter('objectByKeyValFilter', function() {
  return function(input, filterKey, filterVal) {
    var filteredInput = {};
    angular.forEach(input, function(value, key) {
      if (value[filterKey] && value[filterKey] == filterVal) {
        filteredInput[key] = value;
      }
    });
    return filteredInput;
  }
});