'use strict';
//http://stackoverflow.com/questions/14748449/angular-js-using-bootstrap-and-dynamically-creating-rows
angular.module('prevuApp').controller('MainCtrl', function($scope, $filter, prevuAPIservice) {
     $scope.country = {};

   $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'Andorra', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antarctica', code: 'AQ'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'Argentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Aruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'Austria', code: 'AT'},
    {name: 'Azerbaijan', code: 'AZ'},
    {name: 'Bahamas', code: 'BS'},
    {name: 'Bahrain', code: 'BH'},
    {name: 'Bangladesh', code: 'BD'},
    {name: 'Barbados', code: 'BB'},
    {name: 'Belarus', code: 'BY'},
    {name: 'Belgium', code: 'BE'},
    {name: 'Belize', code: 'BZ'},
    {name: 'Benin', code: 'BJ'},
    {name: 'Bermuda', code: 'BM'},
    {name: 'Bhutan', code: 'BT'},
    {name: 'Bolivia', code: 'BO'},
    {name: 'Bosnia and Herzegovina', code: 'BA'},
    {name: 'Botswana', code: 'BW'},
    {name: 'Bouvet Island', code: 'BV'},
    {name: 'Brazil', code: 'BR'},
    {name: 'British Indian Ocean Territory', code: 'IO'},
    {name: 'Brunei Darussalam', code: 'BN'},
    {name: 'Bulgaria', code: 'BG'},
    {name: 'Burkina Faso', code: 'BF'},
    {name: 'Burundi', code: 'BI'},
    {name: 'Cambodia', code: 'KH'},
    {name: 'Cameroon', code: 'CM'},
    {name: 'Canada', code: 'CA'},
    {name: 'Cape Verde', code: 'CV'},
    {name: 'Cayman Islands', code: 'KY'},
    {name: 'Central African Republic', code: 'CF'},
    {name: 'Chad', code: 'TD'},
    {name: 'Chile', code: 'CL'},
    {name: 'China', code: 'CN'},
    {name: 'Christmas Island', code: 'CX'},
    {name: 'Cocos (Keeling) Islands', code: 'CC'},
    {name: 'Colombia', code: 'CO'},
    {name: 'Comoros', code: 'KM'},
    {name: 'Congo', code: 'CG'},
    {name: 'Congo, The Democratic Republic of the', code: 'CD'},
    {name: 'Cook Islands', code: 'CK'},
    {name: 'Costa Rica', code: 'CR'},
    {name: 'Cote D\'Ivoire', code: 'CI'},
    {name: 'Croatia', code: 'HR'},
    {name: 'Cuba', code: 'CU'},
    {name: 'Cyprus', code: 'CY'},
    {name: 'Czech Republic', code: 'CZ'},
    {name: 'Denmark', code: 'DK'},
    {name: 'Djibouti', code: 'DJ'},
    {name: 'Dominica', code: 'DM'},
    {name: 'Dominican Republic', code: 'DO'},
    {name: 'Ecuador', code: 'EC'},
    {name: 'Egypt', code: 'EG'},
    {name: 'El Salvador', code: 'SV'},
    {name: 'Equatorial Guinea', code: 'GQ'},
    {name: 'Eritrea', code: 'ER'},
    {name: 'Estonia', code: 'EE'},
    {name: 'Ethiopia', code: 'ET'},
    {name: 'Falkland Islands (Malvinas)', code: 'FK'},
    {name: 'Faroe Islands', code: 'FO'},
    {name: 'Fiji', code: 'FJ'},
    {name: 'Finland', code: 'FI'},
    {name: 'France', code: 'FR'},
    {name: 'French Guiana', code: 'GF'},
    {name: 'French Polynesia', code: 'PF'},
    {name: 'French Southern Territories', code: 'TF'},
    {name: 'Gabon', code: 'GA'},
    {name: 'Gambia', code: 'GM'},
    {name: 'Georgia', code: 'GE'},
    {name: 'Germany', code: 'DE'},
    {name: 'Ghana', code: 'GH'},
    {name: 'Gibraltar', code: 'GI'},
    {name: 'Greece', code: 'GR'},
    {name: 'Greenland', code: 'GL'},
    {name: 'Grenada', code: 'GD'},
    {name: 'Guadeloupe', code: 'GP'},
    {name: 'Guam', code: 'GU'},
    {name: 'Guatemala', code: 'GT'},
    {name: 'Guernsey', code: 'GG'},
    {name: 'Guinea', code: 'GN'},
    {name: 'Guinea-Bissau', code: 'GW'},
    {name: 'Guyana', code: 'GY'},
    {name: 'Haiti', code: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
    {name: 'Holy See (Vatican City State)', code: 'VA'},
    {name: 'Honduras', code: 'HN'},
    {name: 'Hong Kong', code: 'HK'},
    {name: 'Hungary', code: 'HU'},
    {name: 'Iceland', code: 'IS'},
    {name: 'India', code: 'IN'},
    {name: 'Indonesia', code: 'ID'},
    {name: 'Iran, Islamic Republic Of', code: 'IR'},
    {name: 'Iraq', code: 'IQ'},
    {name: 'Ireland', code: 'IE'},
    {name: 'Isle of Man', code: 'IM'},
    {name: 'Israel', code: 'IL'},
    {name: 'Italy', code: 'IT'},
    {name: 'Jamaica', code: 'JM'},
    {name: 'Japan', code: 'JP'},
    {name: 'Jersey', code: 'JE'},
    {name: 'Jordan', code: 'JO'},
    {name: 'Kazakhstan', code: 'KZ'},
    {name: 'Kenya', code: 'KE'},
    {name: 'Kiribati', code: 'KI'},
    {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
    {name: 'Korea, Republic of', code: 'KR'},
    {name: 'Kuwait', code: 'KW'},
    {name: 'Kyrgyzstan', code: 'KG'},
    {name: 'Lao People\'s Democratic Republic', code: 'LA'},
    {name: 'Latvia', code: 'LV'},
    {name: 'Lebanon', code: 'LB'},
    {name: 'Lesotho', code: 'LS'},
    {name: 'Liberia', code: 'LR'},
    {name: 'Libyan Arab Jamahiriya', code: 'LY'},
    {name: 'Liechtenstein', code: 'LI'},
    {name: 'Lithuania', code: 'LT'},
    {name: 'Luxembourg', code: 'LU'},
    {name: 'Macao', code: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
    {name: 'Madagascar', code: 'MG'},
    {name: 'Malawi', code: 'MW'},
    {name: 'Malaysia', code: 'MY'},
    {name: 'Maldives', code: 'MV'},
    {name: 'Mali', code: 'ML'},
    {name: 'Malta', code: 'MT'},
    {name: 'Marshall Islands', code: 'MH'},
    {name: 'Martinique', code: 'MQ'},
    {name: 'Mauritania', code: 'MR'},
    {name: 'Mauritius', code: 'MU'},
    {name: 'Mayotte', code: 'YT'},
    {name: 'Mexico', code: 'MX'},
    {name: 'Micronesia, Federated States of', code: 'FM'},
    {name: 'Moldova, Republic of', code: 'MD'},
    {name: 'Monaco', code: 'MC'},
    {name: 'Mongolia', code: 'MN'},
    {name: 'Montserrat', code: 'MS'},
    {name: 'Morocco', code: 'MA'},
    {name: 'Mozambique', code: 'MZ'},
    {name: 'Myanmar', code: 'MM'},
    {name: 'Namibia', code: 'NA'},
    {name: 'Nauru', code: 'NR'},
    {name: 'Nepal', code: 'NP'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Netherlands Antilles', code: 'AN'},
    {name: 'New Caledonia', code: 'NC'},
    {name: 'New Zealand', code: 'NZ'},
    {name: 'Nicaragua', code: 'NI'},
    {name: 'Niger', code: 'NE'},
    {name: 'Nigeria', code: 'NG'},
    {name: 'Niue', code: 'NU'},
    {name: 'Norfolk Island', code: 'NF'},
    {name: 'Northern Mariana Islands', code: 'MP'},
    {name: 'Norway', code: 'NO'},
    {name: 'Oman', code: 'OM'},
    {name: 'Pakistan', code: 'PK'},
    {name: 'Palau', code: 'PW'},
    {name: 'Palestinian Territory, Occupied', code: 'PS'},
    {name: 'Panama', code: 'PA'},
    {name: 'Papua New Guinea', code: 'PG'},
    {name: 'Paraguay', code: 'PY'},
    {name: 'Peru', code: 'PE'},
    {name: 'Philippines', code: 'PH'},
    {name: 'Pitcairn', code: 'PN'},
    {name: 'Poland', code: 'PL'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Puerto Rico', code: 'PR'},
    {name: 'Qatar', code: 'QA'},
    {name: 'Reunion', code: 'RE'},
    {name: 'Romania', code: 'RO'},
    {name: 'Russian Federation', code: 'RU'},
    {name: 'Rwanda', code: 'RW'},
    {name: 'Saint Helena', code: 'SH'},
    {name: 'Saint Kitts and Nevis', code: 'KN'},
    {name: 'Saint Lucia', code: 'LC'},
    {name: 'Saint Pierre and Miquelon', code: 'PM'},
    {name: 'Saint Vincent and the Grenadines', code: 'VC'},
    {name: 'Samoa', code: 'WS'},
    {name: 'San Marino', code: 'SM'},
    {name: 'Sao Tome and Principe', code: 'ST'},
    {name: 'Saudi Arabia', code: 'SA'},
    {name: 'Senegal', code: 'SN'},
    {name: 'Serbia and Montenegro', code: 'CS'},
    {name: 'Seychelles', code: 'SC'},
    {name: 'Sierra Leone', code: 'SL'},
    {name: 'Singapore', code: 'SG'},
    {name: 'Slovakia', code: 'SK'},
    {name: 'Slovenia', code: 'SI'},
    {name: 'Solomon Islands', code: 'SB'},
    {name: 'Somalia', code: 'SO'},
    {name: 'South Africa', code: 'ZA'},
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
    {name: 'Spain', code: 'ES'},
    {name: 'Sri Lanka', code: 'LK'},
    {name: 'Sudan', code: 'SD'},
    {name: 'Suriname', code: 'SR'},
    {name: 'Svalbard and Jan Mayen', code: 'SJ'},
    {name: 'Swaziland', code: 'SZ'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Switzerland', code: 'CH'},
    {name: 'Syrian Arab Republic', code: 'SY'},
    {name: 'Taiwan, Province of China', code: 'TW'},
    {name: 'Tajikistan', code: 'TJ'},
    {name: 'Tanzania, United Republic of', code: 'TZ'},
    {name: 'Thailand', code: 'TH'},
    {name: 'Timor-Leste', code: 'TL'},
    {name: 'Togo', code: 'TG'},
    {name: 'Tokelau', code: 'TK'},
    {name: 'Tonga', code: 'TO'},
    {name: 'Trinidad and Tobago', code: 'TT'},
    {name: 'Tunisia', code: 'TN'},
    {name: 'Turkey', code: 'TR'},
    {name: 'Turkmenistan', code: 'TM'},
    {name: 'Turks and Caicos Islands', code: 'TC'},
    {name: 'Tuvalu', code: 'TV'},
    {name: 'Uganda', code: 'UG'},
    {name: 'Ukraine', code: 'UA'},
    {name: 'United Arab Emirates', code: 'AE'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'United States', code: 'US'},
    {name: 'United States Minor Outlying Islands', code: 'UM'},
    {name: 'Uruguay', code: 'UY'},
    {name: 'Uzbekistan', code: 'UZ'},
    {name: 'Vanuatu', code: 'VU'},
    {name: 'Venezuela', code: 'VE'},
    {name: 'Vietnam', code: 'VN'},
    {name: 'Virgin Islands, British', code: 'VG'},
    {name: 'Virgin Islands, U.S.', code: 'VI'},
    {name: 'Wallis and Futuna', code: 'WF'},
    {name: 'Western Sahara', code: 'EH'},
    {name: 'Yemen', code: 'YE'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'}
  ];


  // GET TOP BOOKS
  prevuAPIservice.getTopBooks().success(function(responseBook) {
    var counter = 1; // Counter pour le top
    // Ajout des metas données Amazon ResponseBook
    angular.forEach(responseBook.books, function(book) {
      book.top = counter;
      // GET AMAZON
      prevuAPIservice.getCoverBook(book.biblionumber).success(function(responseCover) {
        book.TinyImage = responseCover.TinyImage;
        book.LargeImage = responseCover.LargeImage;
        book.MediumImage = responseCover.MediumImage;
        book.Edito = responseCover.Edito;
      });
      counter++;
    });
    $scope.topBooks = responseBook.books;
    //$scope.topBooksGroup = $filter('groupBy')(responseBook.books, 3);
    //$scope.topBooks = responseBook.books;
    // GET STATS
    var ds = new Miso.Dataset({
      data: responseBook.books
    });
    ds.fetch({
      success: function() {
        $scope.stats = {
          docs: this.length,
          issues: this.sum('issues'),
          issuesMax: this.max('issues'),
          issuesMin: this.min('issues'),
          renewals: this.sum('renewals'),
          male: this.sum('Male'),
          female: this.sum('Female'),
          years: this.mean('publicationyear').toFixed(2),
          pays: this.countBy('pays').toJSON(),
          langue: this.countBy('langue').toJSON(),
          ccode: this.countBy('ccode').toJSON()
        };
        console.log($scope.stats);
      }
    });
  });
  // // Récupération des meta donnes Amazon
  // function getCover (array) {
  //     // Faire une requete sql en tableau
  //     prevuAPIservice.getCoverBook(array).success(function (responseCover) {
  //         console.log(responseCover);
  //         return responseCover;
  //     });
  // }
  //unescape(string)
  // $scope.topBooks = function() {
  //    console.log("te");
  //   prevuAPIservice.getTopBooks().success(function (response) {
  //     //$scope.books = response;
  //     console.log(response);
  //     return response;
  //   });
  // };
  //topBooks();
  prevuAPIservice.getStatsIssuesAllByMonth().success(function(response) {
    $scope.statsIssuesAllByMonth = [{
      key: "Prêts",
      values: response.stats
    }]
  });
  prevuAPIservice.getTopIssuesByUfr('DROIT').success(function(response) {
    //console.log(response);
  });
  //==== REQUETES STATS MAIN ====//
  prevuAPIservice.getStatsMain().success(function(response) {
    // ==================    
    // BOOK COUNT GRAPH
    $scope.books_count_graph = [{
      "key": "books_count_graph",
      "area": true,
      "values": response[0].books_count_graph
    }];
    // ==================
    // ISSUES COUNT GRAPH
    $scope.issues_count_graph = [{
      "key": "issues_count_graph",
      "area": true,
      "values": response[0].issues_count_graph
    }];
    // ==================
    // BORROWERS COUNT GRAPH
    $scope.borrowers_count_graph = [{
      "key": "borrowers_count_graph",
      "area": true,
      "values": response[0].borrowers_count_graph
    }];
    // ==================
    // PRETS NIVEAU
    // Génération des input selecteur pour les durées
    $scope.semestres = [{
      name: 'Semestre 2 - 2012',
      id: 'Semestre2012'
    }, {
      name: 'Semestre 1 - 2013',
      id: 'Semestre2012-2013_1'
    }, {
      name: 'Semestre 2 - 2013',
      id: 'Semestre2012-2013_2'
    }, {
      name: 'Semestre 1 - 2014',
      id: 'Semestre2013-2014'
    }];
    $scope.selectedSemestre = $scope.semestres[1]; // Par default
    // Premier test pour le choix de données
    $scope.issues_niveau_light = response[0].issues_niveau_light[$scope.semestres[1].id]; // Par défault 
    $scope.setSemestre_issues_niveau_light = function(sem) {
      $scope.issues_niveau_light = response[0].issues_niveau_light[sem.id];
    };
    function getArrayByKey(arr, key) {
      for (var d = 0, len = arr.length; d < len; d += 1) {
        if (arr[d].key === key) {
          return arr[d];
        }
      }
    }
    // ==================
    // CARTOUCHE UFR -> Livres + populaires
    $scope.ByUfr_books = response[0].ByUfr.books; // Les 10 livres les plus populaires dans une ufr
    $scope.ByUfr_ccode = response[0].ByUfr.ccode; // Les Ccode les plus populaires
    // Génération des Selects pour les UFR
    var ufrKeys = new Array();
    angular.forEach(response[0].ByUfr.books, function(ufr) {
      ufrKeys.push({
        name: ufr.key,
        key: ufr.key
      });
    });
    $scope.ufrKeys = ufrKeys;
    $scope.selectedUFR = $scope.ufrKeys[1]; // Select par défault
    // Données pour le horizontal bar
    $scope.ByUfr_ccode = [{
      key: $scope.ufrKeys[1].key,
      values: response[0].ByUfr.ccode[$scope.ufrKeys[1].key].values.slice(0, 10)
    }];
    $scope.ByUfr_books = response[0].ByUfr.books[$scope.ufrKeys[1].key];
    $scope.issues_ufrOnlyUfr = [getArrayByKey(response[0].issues_ufr, $scope.ufrKeys[1].key)];
    $scope.ByUfr_borrowers_sex = response[0].ByUfr.borrowers_sex[$scope.ufrKeys[1].key].values;
    $scope.ByUfr_borrowers_age = response[0].ByUfr.borrowers_age[$scope.ufrKeys[1].key];
    $scope.ByUfr_issues_numbers = response[0].ByUfr.issues_numbers[$scope.ufrKeys[1].key];
    $scope.ByUfr_borrowers_numbers = response[0].ByUfr.borrowers_numbers[$scope.ufrKeys[1].key];


    // Changement des données apres SELECT
    $scope.setUfr = function(ufr) {
      $scope.ByUfr_books = response[0].ByUfr.books[ufr.key];
      $scope.ByUfr_ccode = [{
        key: ufr.key,
        values: response[0].ByUfr.ccode[ufr.key].values.slice(0, 10)
      }];
      $scope.issues_ufrOnlyUfr = [getArrayByKey(response[0].issues_ufr, ufr.key)];
      $scope.ByUfr_borrowers_sex = response[0].ByUfr.borrowers_sex[ufr.key].values;
      $scope.ByUfr_borrowers_age = response[0].ByUfr.borrowers_age[ufr.key];
      $scope.ByUfr_issues_numbers = response[0].ByUfr.issues_numbers[ufr.key];
      $scope.ByUfr_borrowers_numbers = response[0].ByUfr.borrowers_numbers[ufr.key];

    }
  });
});
// filtre
angular.module('prevuApp').filter('objectByKeyValFilter', function() {
  return function(input, filterKey, filterVal) {
    var filteredInput = {};
    angular.forEach(input, function(value, key) {
      if (value[filterKey] && value[filterKey] == filterVal) {
        filteredInput[key] = value;
      }
    });
    return filteredInput;
  }
});