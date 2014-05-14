'use strict';

angular.module('prevuApp')
  .controller('MainCtrl', function ($scope, prevuAPIservice) {
	$scope.clock="eaze";

	function topBooks () {
		prevuAPIservice.getTopBooks().success(function (response) {
			console.log(response);
			$scope.topBooks = response;
    	});
	}

    // $scope.topBooks = function() {
    // 	console.log("te");
    //   prevuAPIservice.getTopBooks().success(function (response) {
    //     //$scope.books = response;
    //     console.log(response);
    //     return	response;
    //   });
    // };
    


    topBooks();


  });
