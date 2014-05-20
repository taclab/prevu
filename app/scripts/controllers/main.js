'use strict';
//http://stackoverflow.com/questions/14748449/angular-js-using-bootstrap-and-dynamically-creating-rows
angular.module('prevuApp')
  .controller('MainCtrl', function ($scope, $filter, prevuAPIservice) {

    // GET TOP BOOKS
	prevuAPIservice.getTopBooks().success(function (responseBook) {
        var counter = 1; // Counter pour le top

        // Ajout des metas données Amazon ResponseBook
        angular.forEach(responseBook.books, function(book){
            book.top = counter;
            // GET AMAZON
            prevuAPIservice.getCoverBook(book.biblionumber).success(function (responseCover) {    
                book.TinyImage = responseCover.TinyImage;
                book.LargeImage = responseCover.LargeImage;
                book.MediumImage = responseCover.MediumImage;
                book.Edito = responseCover.Edito;
            });
            counter++
        });
        $scope.topBooksGroup = $filter('groupBy')(responseBook.books, 3);

        // GET STATS
        var ds = new Miso.Dataset({data: responseBook.books});
        ds.fetch({
            success: function() {
                $scope.stats = {
                    docs : this.length,
                    issues : this.sum('issues'),
                    issuesMax : this.max('issues'),
                    issuesMin : this.min('issues'),
                    renewals : this.sum('renewals'),
                    male : this.sum('Male'),
                    female : this.sum('Female'),
                    years : this.mean('publicationyear').toFixed(2),
                    pays : this.countBy('pays').toJSON(),
                    langue : this.countBy('langue').toJSON(),
                    ccode : this.countBy('ccode').toJSON()

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
    // 	console.log("te");
    //   prevuAPIservice.getTopBooks().success(function (response) {
    //     //$scope.books = response;
    //     console.log(response);
    //     return	response;
    //   });
    // };
    


    //topBooks();


  });
