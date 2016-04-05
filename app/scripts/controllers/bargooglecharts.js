/* global angular */

angular.module('prevuApp', ['ngChartJs'])
    .controller('TestCtrl', ['$scope',

function ($scope) {
    var randomNumber = function () {
        return Math.floor(Math.random() * 255) + 1
    };

    $scope.options = {
        animation: true,
        responsive: true,
        showTooltips: false
    };

    $scope.randomData = function () {

        $scope.barData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()]
            }, {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()]
            }]
        };

        $scope.lineData = {
            "datasets": [{
                "data": [
                randomNumber(),
                randomNumber(),
                randomNumber(),
                randomNumber(),
                randomNumber(),
                randomNumber(),
                randomNumber(),
                randomNumber(),
                randomNumber(),
                randomNumber()],
                    "pointStrokeColor": "#fff",
                    "pointColor": "rgba(0,0,0,1)",
                    "fillColor": "rgba(0,0,0,1)",
                    "strokeColor": "rgba(0,0,0,0.5)"
            }],
                "labels": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J", ]
        };

        $scope.pieData = [{
            value: randomNumber(),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        }, {
            value: randomNumber(),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        }, {
            value: randomNumber(),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }]

        $scope.radarData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()]
            }, {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()]
            }]
        };

    };

    $scope.randomData();
}]);

angular.module("ngChartJs", []).directive("ngChartJs", function () {
    Chart.defaults.global.responsive = !0;
    var t = function (t) {
        switch (t) {
            case "line":
                return "Line";
            case "bar":
                return "Bar";
            case "radar":
                return "Radar";
            case "polararea":
                return "PolarArea";
            case "pie":
                return "Pie";
            default:
                return t
        }
    }, a = function (a, r) {
        var e = function () {
            var e = t(a.type.toLowerCase()),
                n = r[0].getContext("2d"),
                o = a.options ? a.options : {};
            return new Chart(n)[e](a.data, o)
        }, n = e();
        a.$watchGroup(["data", "options"], function (t, r) {
            t != r && n.initialize(a.data, a.options)
        })
    };
    return {
        restrict: "A",
        link: a,
        scope: {
            data: "=",
            options: "=",
            type: "@"
        }
    }
});