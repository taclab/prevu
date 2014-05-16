'use strict';

angular.module('prevuApp')
  .controller('MainCtrl', function ($scope, prevuAPIservice) {

	prevuAPIservice.getTopBooks().success(function (responseBook) {
        // Ajout des metas données Amazon ResponseBook
        angular.forEach(responseBook.books, function(book){
            // GET AMAZON
            prevuAPIservice.getCoverBook(book.biblionumber).success(function (responseCover) {
                book.TinyImage = responseCover.TinyImage;
                book.LargeImage = responseCover.LargeImage;
                book.MediumImage = responseCover.MediumImage;
                book.Edito = responseCover.Edito;
            });
        });
        $scope.topBooks = responseBook;
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
