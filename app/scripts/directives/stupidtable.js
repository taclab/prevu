'use strict';

angular.module('prevuApp')
  .directive('stupidTable', function () {
    return {
      restrict: 'A',
      link: function link(scope, element) {
		console.log('test');
		console.log(element);
        element.stupidtable();
      }
    };
  });
