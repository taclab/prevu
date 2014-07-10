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
  $scope.listUfr = {
    "AESECOGES" : "UFR AES, ÉCONOMIE ET GESTION",
    "ARTS" : "UFR ARTS, PHILOSOHIE, ESTHÉTIQUE",
    "CC" : "UFR CULTURE ET COMMUNICATION",
    "ZZ" : "ZZ",
    "DROIT" : "UFR DROIT",
    "ED 031" : "ED PRATIQUES ET THÉORIES DU SENS",
    "ED 159" : "ED ESTHÉTIQUE, SC. ET TECHNO. DES ARTS",
    "ED 224" : "ED COGNITION, LANGAGE, INTERACTION",
    "ED 401" : "ED SCIENCES SOCIALES",
    "Form. perm" : "FORMATION PERMANENTE",
    "IED" : "INSTITUT D'ENSEIGNEMENT À DISTANCE",
    "IEE" : "INSTITUT D'ETUDES EUROPÉENNES",
    "IFG" : "INSTITUT FRANÇAIS DE GÉOPOLITIQUE",
    "IPT" : "INFORMATIQUE POUR TOUS",
    "IUT MONTR" : "IUT DE MONTREUIL",
    "IUT TREMBL" : "IUT DE TREMBLAY-EN-FRANCE",
    "LLCE-LEA" : "UFR LLCE-LEA",
    "MITSIC" : "UFR M.I.T.S.I.C",
    "PSYCHO" : "UFR DE PSYCHOLOGIE",
    "SDL" : "UFR SCIENCES DU LANGAGE",
    "SEPF" : "UFR SCIENCES ÉDUCATION, PSYCHANALYSE,FLE",
    "SUFICE" : "SUFICE",
    "T&S" : "UFR TEXTES ET SOCIÉTÉS.",
    "TES" : "UFR TERRITOIRES, ENVIRONNEMENTS,SOCIÉTÉS"
    };
  var colorSchem = ['#2790b0','#c75233'];
  var colorViz = ['#8dd3c7','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f'];
  $scope.color_schem = function() {
  return function(d, i) {
      return colorSchem[i];
    };
  }
  $scope.xFunction = function() {
    return function(d) {
      return $scope.categoryBook[d.label];
    };
  }
  $scope.xFunctionUfr = function() {
    return function(d) {
        return ($scope.listUfr[d.label]) ? $scope.listUfr[d.label] : d.label
      //return d.label;
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