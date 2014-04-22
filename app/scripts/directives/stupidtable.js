'use strict';

angular.module('prevuApp')
  .directive('stupidTable', function () {
    return {
      restrict: 'A',
      link: function link(scope, element) {

        element.stupidtable();
        element.on('aftertablesort', function (event, data) {
          var th = $(this).find('th');
          th.find('.arrow').remove();
          var dir = $.fn.stupidtable.dir;
          var arrow = data.direction === dir.ASC ? '&uarr;' : '&darr;';
          th.eq(data.column).append('<span class="arrow">' + arrow +'</span>');
        });


      }
    };
  });
