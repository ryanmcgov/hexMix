(function() {
  'use strict';
angular
  .module('hexMix', [
      'ngRoute',
      'MainController'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'MainController'
      })
      .when('/404', {
        template: '<h2>Sorry, colors are for winners</h2>'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
}());
