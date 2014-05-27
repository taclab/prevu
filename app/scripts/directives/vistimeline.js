angular.module('prevuApp').directive('visTimeline', function() {
  return {
    template: '<div></div>',
    restrict: 'A',
    scope: {
      value: '=value'
    },
    link: function link(scope, element, attrs) {
      scope.$watch('value', function(issues) {
        if (issues) {
          // Récupération des valeurs uniques des items numbers
          // Fonction imbriqué - ne marche pas en use strict
          var unique = function(data, key) {
            var result = [];
            for (var i = 0; i < data.length; i++) {
              var value = data[i][key];
              if (result.indexOf(value) === -1) {
                result.push(value);
              }
            }
            return result;
          };
          var itemnumbers = unique(issues, 'itemnumber');
          // Création des groupes
          var groups = new vis.DataSet();
          for (var g = 0; g < itemnumbers.length; g++) {
            groups.add({
              id: itemnumbers[g],
              content: 'Ex. #' + (g + 1)
            });
          }
          console.log(groups);
          var items = new vis.DataSet();
          var number = 0;
          var container = document.getElementById('visualization');
          angular.forEach(issues, function(item) {
            items.add({
              id: number++,
              content: item.Niveau + ' ' + item.sex,
              start: new Date(item.issuedate),
              end: new Date(item.returndate),
              className: item.Niveau,
              group: item.itemnumber
            });
          });
          var options = {
            stack: false,
            margin: {
              item: 0, // minimal margin between items
              axis: 5 // minimal margin between items and the axis
            },
            min: new Date(2011, 12, 1),
            max: new Date(2014, 6, 1),
            orientation: 'top',
            align: 'center',
            zoomMin: 1000 * 60 * 60 * 144
          };
          var timeline = new vis.Timeline(container);
          timeline.setOptions(options);
          timeline.setGroups(groups);
          timeline.setItems(items);
        }
      });
    }
  };
});