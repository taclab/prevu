
angular.module('prevuApp')
  .directive('visTimeline', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      scope: { value: '=value' },
      link: function link(scope, element, attrs, $q) {

		scope.$watch('value', function(issues) {
          	if (issues) {
          		
				// Récupération des valeurs uniques des items numbers
				// Fonction imbriqué - ne marche pas en use strict
				var unique = function(data, key) {
				   var result = [];
				   for(var i=0;i<data.length;i++) {
				      var value = data[i][key];
				      if (result.indexOf(value) == -1) {
				         result.push(value);
				      }
				   }
				   return result;
				};
				var itemnumbers = unique(issues, 'itemnumber');


				// Création des groupes
				var groups = new vis.DataSet();
				for (var g = 0; g < itemnumbers.length; g++) {
				  groups.add({id: itemnumbers[g], content: 'Ex. #'+(g+1)});
				}
				console.log(groups);
          		var items = new vis.DataSet();
				var number = 0;
				var container = document.getElementById('visualization');
				angular.forEach(issues, function(item){
					items.add({
					id : number++,
					content : item.Niveau +" "+ item.sex,
					start : new Date(item.issuedate),
					end : new Date(item.returndate),
					className : item.Niveau,
					group : item.itemnumber				
					});
				});


				var options = {
					stack: false,
					margin: {
						item: 0, // minimal margin between items
						axis: 5   // minimal margin between items and the axis
					},
					min: new Date(2011, 12, 1),                // lower limit of visible range
    				max: new Date(2014, 6, 1),
					orientation: 'top',
					align : 'center'
				};
				console.log(items);

				//var timeline = new vis.Timeline(container, items, options);
				var timeline = new vis.Timeline(container);
				timeline.setOptions(options);
				timeline.setGroups(groups);
				timeline.setItems(items);
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
