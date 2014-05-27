"use strict";angular.module("prevuApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/auteur",{templateUrl:"views/auteur.html",controller:"AuteurCtrl",reloadOnSearch:!1}).when("/livre",{templateUrl:"views/issues.html",controller:"IssuesCtrl",reloadOnSearch:!1}).otherwise({redirectTo:"/"})}]),angular.module("prevuApp").controller("MainCtrl",["$scope","$filter","prevuAPIservice",function(a,b,c){c.getTopBooks().success(function(d){var e=1;angular.forEach(d.books,function(a){a.top=e,c.getCoverBook(a.biblionumber).success(function(b){a.TinyImage=b.TinyImage,a.LargeImage=b.LargeImage,a.MediumImage=b.MediumImage,a.Edito=b.Edito}),e++}),a.topBooksGroup=b("groupBy")(d.books,3);var f=new Miso.Dataset({data:d.books});f.fetch({success:function(){a.stats={docs:this.length,issues:this.sum("issues"),issuesMax:this.max("issues"),issuesMin:this.min("issues"),renewals:this.sum("renewals"),male:this.sum("Male"),female:this.sum("Female"),years:this.mean("publicationyear").toFixed(2),pays:this.countBy("pays").toJSON(),langue:this.countBy("langue").toJSON(),ccode:this.countBy("ccode").toJSON()},console.log(a.stats)}})})}]),angular.module("prevuApp").controller("AuteurCtrl",["$scope","$routeParams","$location","$http","Books","prevuAPIservice",function(a,b,c,d,e,f){var g=c.search();g.nom&&f.getBookByAuthor({author_nom:g.nom,author_prenom:g.prenom}).success(function(b){a.books=b.search,h(b.search)});var h=function(b){var c=new Miso.Dataset({data:b});c.fetch({success:function(){a.stats={docs:this.length,issues:this.sum("issues"),issuesMax:this.max("issues"),issuesMin:this.min("issues"),renewals:this.sum("renewals"),male:this.sum("Male"),female:this.sum("Female"),years:this.mean("publicationyear").toFixed(2),pays:this.countBy("pays").toJSON(),langue:this.countBy("langue").toJSON()}}})};a.search=function(){console.log(a.queryTerm),f.getBookByAuthor(a.queryTerm).success(function(b){a.books=b.search,h(b.search),c.search("nom",a.queryTerm.author_nom),c.search("prenom",a.queryTerm.author_prenom)})},a.suggestAuthors=function(a){return d.get("http://localhost:8888/prevu/application/api/author/search/"+a).then(function(a){var b=[];return angular.forEach(a.data.search,function(a){b.push(a)}),b})}}]),angular.module("prevuApp").factory("Books",["$resource",function(a){return a("http://localhost:8888/prevu/application/api/search/:auteurName",{auteurName:"@auteurName"},{loan:{method:"PUT",params:{bookId:"@bookId"},isArray:!1}})}]),angular.module("prevuApp").directive("stupidTable",function(){return{restrict:"A",link:function(a,b){b.stupidtable(),b.on("aftertablesort",function(a,b){var c=$(this).find("th");c.find(".arrow").remove();var d=$.fn.stupidtable.dir,e=b.direction===d.ASC?"&uarr;":"&darr;";c.eq(b.column).append('<span class="arrow">'+e+"</span>")})}}}),angular.module("prevuApp").factory("prevuAPIservice",["$http",function(a){var b={},c="http://localhost:8888/prevu/application/";return b.searchAuthor=function(b){return a({url:c+"api/author/search/"+b})},b.searchBook=function(b){return a({url:c+"api/book/search/"+b})},b.searchBookByAuthor=function(b){return a({url:c+"api/books/author/search/"+b})},b.getBookByAuthor=function(b){return a({method:"POST",url:c+"api/books/author",headers:{"Content-Type":"application/json"},data:b})},b.searchIssuesByTitle=function(b){return a({url:c+"api/issues/title/"+b})},b.searchIssuesByBiblionumber=function(b){return a({url:c+"api/issues/biblionumber/"+b})},b.getTopBooks=function(){return a({url:c+"api/books/top/"})},b.getCoverBook=function(b){return a({url:c+"api/book/cover/"+b})},b}]),angular.module("prevuApp").controller("IssuesCtrl",["$scope","$routeParams","$location","$http","prevuAPIservice",function(a,b,c,d,e){var f=c.search();f.biblionumber&&e.searchIssuesByBiblionumber(f.biblionumber).success(function(b){a.issues=b,g(b)});var g=function(b){var c=new Miso.Dataset({data:b});c.fetch({success:function(){a.stats={issues:this.length,sex:this.countBy("sex").toJSON(),ufr:this.countBy("Ufr").toJSON(),niveau:this.countBy("Niveau").toJSON(),etape:this.countBy("Etape").toJSON(),description:this.countBy("categorycode").toJSON()}}})};a.search=function(){e.searchIssuesByBiblionumber(a.queryTerm.biblionumber).success(function(b){a.issues=b,g(b),c.search("biblionumber",a.queryTerm.biblionumber)})},a.suggestBooks=function(a){return d.get("http://localhost:8888/prevu/application/api/book/search/"+a).then(function(a){var b=[];return angular.forEach(a.data.search,function(a){b.push(a)}),b})}}]),angular.module("prevuApp").controller("HeadernavCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("prevuApp").directive("visTimeline",function(){return{template:"<div></div>",restrict:"A",scope:{value:"=value"},link:function(a){a.$watch("value",function(a){if(a){for(var b=function(a,b){for(var c=[],d=0;d<a.length;d++){var e=a[d][b];-1===c.indexOf(e)&&c.push(e)}return c},c=b(a,"itemnumber"),d=new vis.DataSet,e=0;e<c.length;e++)d.add({id:c[e],content:"Ex. #"+(e+1)});console.log(d);var f=new vis.DataSet,g=0,h=document.getElementById("visualization");angular.forEach(a,function(a){f.add({id:g++,content:a.Niveau+" "+a.sex,start:new Date(a.issuedate),end:new Date(a.returndate),className:a.Niveau,group:a.itemnumber})});var i={stack:!1,margin:{item:0,axis:5},min:new Date(2011,12,1),max:new Date(2014,6,1),orientation:"top",align:"center",zoomMin:5184e5},j=new vis.Timeline(h);j.setOptions(i),j.setGroups(d),j.setItems(f)}})}}}),angular.module("prevuApp").filter("groupBy",function(){return function(a,b){if(a){for(var c,d=[],e=0;e<a.length;e++)c||(c=[]),c.push(a[e]),(e+1)%b===0&&(d.push(c),c=null);return c&&d.push(c),d}}});