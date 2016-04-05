'use strict';

//http://stackoverflow.com/questions/14748449/angular-js-using-bootstrap-and-dynamically-creating-rows
angular.module('prevuApp').controller('MainCtrl', function($scope, $rootScope, $filter, $location, $anchorScroll, prevuAPIservice) {
    $rootScope.bodyClass = "viewMain";
 

     prevuAPIservice.getTotalUfr().success(function(response) {
    //récupération du résultat du web service getUfr
    $scope.ufrs = response;
    // premier élement du web service getUfr
    $scope.ufr = $scope.ufrs[0];

  });
      prevuAPIservice.getTotalUfrSeule().success(function(response) {
    //récupération du résultat du web service getUfr
    $scope.ufrsTotal = response;
      //$scope.ufr = $scope.ufrsTotal[0];

  });
    //prevuAPIservice.getCoverIssuesByUfr("ARTS").success(function(response) {
 //$scope.issuesUfrBook = response;
 // });
   // $scope.setUfrs = function(ufr) {
 //prevuAPIservice.getCoverIssuesByUfr(ufr).success(function(response) {
   //$scope.issuesUfrBook =  response;
  // $scope.topBookByUfr = $scope.issuesUfrBook[0];
    
  //});
  // }
  // GET TOP BOOKS

prevuAPIservice.getTopCouvByUfr("arts").success(function(response) {
   

    prevuAPIservice.getMultipleCoverBook(response.slice(0,10)).success(function(responseCovers) {
      $scope.topBooksCovers = responseCovers;
    });
    $scope.topBooks = response;
  
   

  });
$scope.setUfr= function(ufr) {
prevuAPIservice.getTopCouvByUfr(ufr).success(function(response) {
   

    prevuAPIservice.getMultipleCoverBook(response.slice(0,10)).success(function(responseCovers) {
      $scope.topBooksCovers = responseCovers;
    });
    $scope.topBooks = response;
      // GET STATS
 
    

  });}
//les livres les plus populaires
prevuAPIservice.getTopCouv().success(function(response) {
   

    prevuAPIservice.getMultipleCoverBook(response.slice(0,10)).success(function(responseCover) {
      $scope.topBooksCover = responseCovers;
    });
    $scope.bookpopulaires = response;
      // GET STATS
 
    

  });



 /* prevuAPIservice.getTopBooks().success(function(responseBook) {
    var counter = 1; // Counter pour le top
    // Ajout des metas données Amazon ResponseBook

    prevuAPIservice.getMultipleCoverBook(responseBook.books.slice(0,10)).success(function(responseCovers) {
      $scope.topBooksCovers = responseCovers;
    });
    $scope.topBooks = responseBook.books;
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
          //male: this.sum('Male'),
          //female: this.sum('Female'),
          years: this.mean('publicationyear').toFixed(2),
          pays: this.countBy('pays').toJSON(),
          langue: this.countBy('langue').toJSON(),
          ccode: this.countBy('ccode').toJSON()
        };
      }
    });
  });*/

  //topBooks();
  prevuAPIservice.getStatsIssuesAllByMonth().success(function(response) {
    $scope.statsIssuesAllByMonth = [{
      key: "Prêts",
      "area": true,
      values: response.stats
    }]
  });
//pr categorie
   prevuAPIservice.getIssuesByCategorie().success(function(response) {
    $scope.statsIssuesByCategorie = response.stats
  });
   //EMPRUNT SELON UFR 
   prevuAPIservice.getIssuesByUfr().success(function(response) {
  $scope.statsIssuesUfr = [{
      key: "Prêts",
      "area": true,
      values: response.stats
    }]
  });
//pour semestre
prevuAPIservice.getIssuesBySemestre().success(function(response) {
    $scope.statsIssuesBySemestre = [{
      key: "Prêts",
      "area": true,
      values: response
    }]

  
          
    
  });
//bouk empruntés au moin une fois par semestre
prevuAPIservice.getIssuesBookBySemestre().success(function(response) {
    $scope.statsIssuesBookBySemestre = [{
      key: "Prêts",
      "area": true,
      values: response.stats
    }]

  });
 //nombre emprunteur qui ont pris au moin un livre par Semestre 
prevuAPIservice.getIssuesBorrowernumberBySemestre().success(function(response) {
    $scope.statsIssuesBorrowerBySemestre = [{
      key: "Prêts",
      "area": true,
     values: response
    }]

 });
 //total borrowers
prevuAPIservice.getTotalBorrowers().success(function(response) {
    $scope.totalBorrowers = response
    
    
 });
 //total issues
prevuAPIservice.getTotalIssues().success(function(response) {
    $scope.totalissues = response
    
    
 });
//total Book
prevuAPIservice.getTotalBooks().success(function(response) {
    $scope.totalbooks = response
    
    
 });
//moyenne age
prevuAPIservice.getMoyenneAgeBorrower().success(function(response) {
    $scope.moyenneage = response
    
    
 });
//emprunts selon sex
prevuAPIservice.getIssuesBySex().success(function(response) {
      $scope.statsIssuesBySex = response
    
    
 });



//nombres d'emprunt par mois selon l'année
prevuAPIservice.getYears().success(function(response) {
    //récupération du résultat du web service getYears
    $scope.annees = response;
    // premier élement du web service getYears
    $scope.annee = $scope.annees[0];

  });
// récupération des emprunts par mois pour l'année 2012 (par défaut) pour le permer appel (pour faire le graphe)
prevuAPIservice.getIssuesAllByMonthYear(2012).success(function(response) {
    $scope.issuesAllByMonthYear = [{
      key: "Prêts",
      "area": true,
      values: response
    }]
  });
// récupération des emprunts par mois pour chaque changement d'année (onChange) (pour faire le graphe)
$scope.setYearMois = function(year) {
  prevuAPIservice.getIssuesAllByMonthYear(year).success(function(response) {
    $scope.issuesAllByMonthYear = [{
      key: "Prêts",
      "area": true,
      values: response
    }]
  });
    }


//nombres d'emprunt par mois selon l'année
prevuAPIservice.getYears().success(function(response) {
    //récupération du résultat du web service getYears
    $scope.annees = response;
    // premier élement du web service getYears
    $scope.annee = $scope.annees[0];

  });


//récupération des UFR
//repertition des pret selon l'ufr
prevuAPIservice.getIssuesMonthUfr("ARTS").success(function(response) {
 $scope.issuesMonthUfr = [{
      key: "Prêts",
      values: response
    }]
  });

   



prevuAPIservice.getIssuesCcodeUfr("arts").success(function(response) {
    $scope.issuesCcodeUfr = [{
      key: "Prêts",
      "area": true,
      values: response
    }]
  });

prevuAPIservice.getIssuesBySexUfr("arts").success(function(response) {
    $scope.issuesSexUfr =response
   
  });
$scope.setUfrStats = function(ufr) {
  // récupération des emprunts selon les niveau pour chaque changement d'année (onChange) (pour faire le graphe)

 prevuAPIservice.getIssuesMonthUfr(ufr).success(function(response) {
   $scope.issuesMonthUfr = [{
      key: "Prêts",
      values: response
    }]
    
  });
  
prevuAPIservice.getIssuesBySexUfr(ufr).success(function(response) {
    $scope.issuesSexUfr = response
   
  });


// récupération des emprunts par mois pour l'année 2012 (par défaut) pour le permer appel (pour faire le graphe)

prevuAPIservice.getIssuesCcodeUfr(ufr).success(function(response) {
    $scope.issuesCcodeUfr = [{
      key: "Prêts",
      "area": true,
      values: response
    }]
  });}


    //vidette matiere 
prevuAPIservice.getIssuesMatiere(2012).success(function(response) {
    $scope.issuesMatieres = response});
// récupération des emprunts selon les matierres pour chaque changement d'année (onChange) (pour faire le graphe)
$scope.setYearVedette = function(year) {
  prevuAPIservice.getIssuesMatiere(year).success(function(response) {
   $scope.issuesMatieres = response
  });
    }



//récupération des semèstre
    prevuAPIservice.getSemestres().success(function(response) {
    //récupération du résultat du web service getYears
    $scope.semestres = response;
    // premier élement du web service getYears
    $scope.semestre = $scope.semestres[0];

  });

    //repertition des pret selon niveau
prevuAPIservice.getIssuesMonthNiveau("Semestre 1-2012").success(function(response) {
 $scope.issuesMonthNiveau = response;
  });
// récupération des emprunts selon les niveau pour chaque changement d'année (onChange) (pour faire le graphe)
$scope.setSemestre = function(semestre) {
 prevuAPIservice.getIssuesMonthNiveau(semestre).success(function(response) {
   $scope.issuesMonthNiveau =  response;
    
  });
   }

       //repertition des pret selon matiere
prevuAPIservice.getIssuesMonthMatiere("2012").success(function(response) {
 $scope.issuesMonthMatiere = response;
  });
// récupération des emprunts selon les matiere pour chaque changement d'année (onChange) (pour faire le graphe)
$scope.setyearmatiere = function(year) {
 prevuAPIservice.getIssuesMonthMatiere(year).success(function(response) {
   $scope.issuesMonthMatiere =  response;
    
  });
   }



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
    // BORROWERS SEX & AGE general 
    $scope.borrowers_sex = response[0].borrowers_sex;
    $scope.borrowers_age = response[0].borrowers_age;
    $scope.issues_categoryCode = response[0].issues_categoryCode;
    // REPARTITION UFR
    $scope.issues_UfrRepartition = [{
      key: "Ufr",
      values: response[0].issues_UfrRepartition.slice(0,15)
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
    prevuAPIservice.getMultipleCoverBook(response[0].ByUfr.books[$scope.ufrKeys[1].key].values.slice(0, 10)).success(function(responseCovers) {
      $scope.ByUfr_booksCover = responseCovers;
    });
    $scope.issues_ufrOnlyUfr = [getArrayByKey(response[0].issues_ufr, $scope.ufrKeys[1].key)];
    $scope.ByUfr_borrowers_sex = response[0].ByUfr.borrowers_sex[$scope.ufrKeys[1].key].values;
    $scope.ByUfr_borrowers_age = response[0].ByUfr.borrowers_age[$scope.ufrKeys[1].key];
    $scope.ByUfr_issues_numbers = response[0].ByUfr.issues_numbers[$scope.ufrKeys[1].key];
    $scope.ByUfr_borrowers_numbers = response[0].ByUfr.borrowers_numbers[$scope.ufrKeys[1].key];

    



    // Changement des données apres SELECT
    /*$scope.setUfr = function(ufr) {
      $scope.ByUfr_books = response[0].ByUfr.books[ufr.key];
      prevuAPIservice.getMultipleCoverBook(response[0].ByUfr.books[ufr.key].values.slice(0, 10)).success(function(responseCovers) {
        $scope.ByUfr_booksCover = responseCovers;
      });
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
*/

  



    // ANCHOR
    $scope.gotoExplorer = function() {
      $location.hash('explorer-scroll');
      $anchorScroll();
    };
    $scope.gotoBegin = function() {
      $location.hash('general-scroll');
      $anchorScroll();
    };

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