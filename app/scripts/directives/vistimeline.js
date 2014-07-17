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
              content: item.Niveau,
              niveau : item.Niveau,
              sex : item.sex,
              start: new Date(item.issuedate),
              startDate : item.issuedate,
              end: new Date(item.returndate),
              endDate : item.returndate,
              ufr : item.Ufr,              
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
            moveable : false,
            zoomable : false,
            zoomMin: 1000 * 60 * 60 * 144
          };


          var timeline = new vis.Timeline(container);
          timeline.setOptions(options);
          timeline.setGroups(groups);
          timeline.setItems(items);

          timeline.on('select', function (properties) {
            // var dateStartD = new Date(items.data[properties.items[0]].start);
            // var dateStartF = dateStartD.toDateString();
            // var dateEndD = new Date(items.data[properties.items[0]].end);
            // var dateF = dateStartD.toDateString()
            // console.log(dateStartF);
            $('.itemInfos .niveau').html('<strong>Niveau : </strong>'+items.data[properties.items[0]].niveau);
            $('.itemInfos .sex').html('<strong>Sex : </strong>'+items.data[properties.items[0]].sex);
            $('.itemInfos .ufr').html('<strong>Ufr : </strong>'+items.data[properties.items[0]].ufr);
            $('.itemInfos .dateStart').html('<strong>Date de début : </strong>'+items.data[properties.items[0]].startDate);
            $('.itemInfos .dateEnd').html('<strong>Date de fin : </strong>'+items.data[properties.items[0]].endDate);

          });
        }
      });
    }
  };
});