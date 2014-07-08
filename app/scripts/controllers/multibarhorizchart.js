'use strict';
angular.module('prevuApp').controller('MultibarhorizchartCtrl', function($scope) {
  $scope.categoryBook = {
    "Y": "Histoire",
    "E": "Sociologie",
    "C": "Psychologie",
    "VF": "Français",
    "G": "Economie Stats",
    "SA": "Arts plastiques",
    "K": "Sciences éducation",
    "B": "Philosophie",
    "Z": "Fonds RDA",
    "H": "Droit Admin",
    "F": "Sciences politiques",
    "W": "Linguistique",
    "SC": "Cinéma",
    "VA": "Anglais",
    "FJD": "Fonds Jean Dresch",
    "A": "Info Doc Médias",
    "U": "Usuels Généralités",
    "X": "Géographie",
    "M": "Ethnologie",
    "SP": "Photographie",
    "ST": "Arts du spectacle",
    "SM": "Musique",
    "VL": "Littérature générale",
    "L": "Sciences",
    "VE": "Espagnol",
    "VD": "Allemand",
    "D": "Religion",
    "N": "Informatique Tech",
    "T": "Urbanisme",
    "VR": "Langues slaves",
    "VS": "Arabe Hébreu",
    "VI": "Italien",
    "VP": "Portugais",
    "FEL": "Fonds Ernest Labrousse",
    "VC": "Langues Asie",
    "VG": "Latin Grec",
    "FME": "Fonds Maghreb Europe",
    "MAM": "Fonds M. A. Macciocchi",
    "VM": "D'autres langues et littératures",
    "CER": "Fonds CERASA",
    "BD": "Bandes dessinées",
    "YC": "Concours Histoire",
    "CS": "Fonds Claude Simon",
    "XC": "Concours Géographie"
  };
  $scope.xFunction = function() {
    return function(d) {
      return $scope.categoryBook[d.label];
    };
  }
  $scope.yFunction = function(t) {
    return function(d) {
      return d3.round(d.value);
    };
  }
  $scope.yAxisTickFormatFunction = function() {
    return function(d) {
      return d.ufr;
    }
  }
});