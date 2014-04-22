'use strict';

angular.module('prevuApp')
  .factory('Books', ['$resource', function($resource) {

    return $resource( 'http://localhost:8888/angular/prevu/api/search/:auteurName', { auteurName: '@auteurName' },
      {
      loan: {
        method: 'PUT',
        params: { bookId: '@bookId' },
        isArray: false
      }
    });
  }]);