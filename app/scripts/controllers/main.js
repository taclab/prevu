'use strict';
//http://stackoverflow.com/questions/14748449/angular-js-using-bootstrap-and-dynamically-creating-rows
angular.module('prevuApp').controller('MainCtrl', function($scope, $filter, prevuAPIservice) {
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
    $scope.topBooksGroup = $filter('groupBy')(responseBook.books, 3);
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
        console.log($scope.stats);
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
      values: response.stats
    }]
  });
  prevuAPIservice.getStatsIssuesAllByDay().success(function(response) {
    $scope.statsIssuesAllByDay = [{
      key: "Prêts",
      values: response.stats
    }]
  });

  // prevuAPIservice.getStatsIssuesAllByMonthAverageNiveau().success(function(response) {
  //   function transformArr(orig) {
  //     var newArr = [],
  //       types = {},
  //       newItem, i, j, cur;
  //     for (i = 0, j = orig.length; i < j; i++) {
  //       cur = orig[i];
  //       if (!(cur.niveau in types)) {
  //         types[cur.niveau] = {
  //           key: cur.niveau,
  //           values: []
  //         };
  //         newArr.push(types[cur.niveau]);
  //       }
  //       types[cur.niveau].values.push({
  //         issues: cur.issues,
  //         month: cur.month,
  //         year: cur.year,
  //         timestamp: cur.issuesdate
  //       });
  //     }
  //     return newArr;
  //   }
  //   $scope.statsIssuesAllByMonthAverageNiveau = transformArr(response.stats);
  // });
  // prevuAPIservice.getStatsIssuesAllByDayAverageNiveau().success(function(response) {
  //   function transformArr(orig) {
  //     var newArr = [],
  //       types = {},
  //       newItem, i, j, cur;
  //     for (i = 0, j = orig.length; i < j; i++) {
  //       cur = orig[i];
  //       if (!(cur.niveau in types)) {
  //         types[cur.niveau] = {
  //           key: cur.niveau,
  //           values: []
  //         };
  //         newArr.push(types[cur.niveau]);
  //       }
  //       types[cur.niveau].values.push({
  //         issues: cur.issues,
  //         month: cur.month,
  //         year: cur.year,
  //         timestamp: cur.issuesdate
  //       });
  //     }
  //     return newArr;
  //   }
  //   $scope.statsIssuesAllByDayAverageNiveau = transformArr(response.stats);
  // });
  
  prevuAPIservice.getTopIssuesByUfr('DROIT').success(function(response) {
    //console.log(response);

  });
  prevuAPIservice.getStatsMain().success(function(response) {
    //$scope.statsMain = response;

    $scope.books_count_graph = [
           {
               "key": "books_count_graph",
               "area": true,
                "values": response[0].books_count_graph
         }
       ];
    $scope.issues_count_graph = [
           {
               "key": "issues_count_graph",
               "area": true,
                "values": response[0].issues_count_graph
         }
       ];
    $scope.borrowers_count_graph = [
           {
               "key": "borrowers_count_graph",
               "area": true,
                "values": response[0].borrowers_count_graph
         }
       ];       
    $scope.issues_ufr = response[0].issues_ufr;
    $scope.issues_niveau = response[0].issues_niveau;
    console.log(response[0].issues_niveau_light);

    $scope.selectedSemestre = {name:'Semestre 1 - 2013', id: 'Semestre2012-2013_1'};
    $scope.semestres = [
      {name:'Semestre 2 - 2012', id: 'Semestre2012'}, 
      {name:'Semestre 1 - 2013', id: 'Semestre2012-2013_1'}, 
      {name:'Semestre 2 - 2013', id: 'Semestre2012-2013_2'}, 
      {name:'Semestre 1 - 2014', id: 'Semestre2013-2014'}, 
    ];

    $scope.issues_niveau_light = response[0].issues_niveau_light['Semestre2012'];


    $scope.setSemestre_issues_niveau_light= function(sem){
      $scope.issues_niveau_light = response[0].issues_niveau_light[sem.id];
    };



  });


  prevuAPIservice.getTopIssuesByUfr('ARTS').success(function(response) {
    //console.log(response);
  });
  

});
