'use strict';

angular.module('prevuApp')
  .directive('visTimeline', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      scope: { value: '=value' },
      link: function link(scope, element, attrs) {

		scope.$watch('value', function(issues) {
          	if (issues) {
          		var data = []
				var number = 0;
				var container = document.getElementById('visualization');
				angular.forEach(issues, function(item){
					data.push({
					id : number++,
					content : item.Niveau +" "+ item.sex,
					start : item.issuedate,
					end : item.returndate,
					className : item.Niveau
					});

				});
				var options = {};
				console.log(element);
				var timeline = new vis.Timeline(container, data, options);
          	}

		});

		// var data = [
		//   {id: 1, content: 'item 1', start: '2013-04-20'},
		//   {id: 2, content: 'item 2', start: '2013-04-14'},
		//   {id: 3, content: 'item 3', start: '2013-04-18'},
		//   {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
		//   {id: 5, content: 'item 5', start: '2013-04-25'},
		//   {id: 6, content: 'item 6', start: '2013-04-27'}
		// ];
		// var options = {};
		// console.log(data);
  //       element.text('this is the visTimeline directive');

      }
    };
  });
