var myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      //.when('/player', {
      //  templateUrl: '/assets/views/templates/player_view.html',
      //  controller: 'DashboardController'
      //})
      .when('/birdie', {
        templateUrl: '/views/templates/birdie_view.html',
        controller: 'BirdieController'
      })
      .when('/bison', {
        templateUrl: '/views/templates/bison_view.html',
        controller: 'BisonController'
      })
      .when('/cammy', {
        templateUrl: '/views/templates/cammy_view.html',
        controller: 'CammyController'
      })
      .when('/chun', {
        templateUrl: '/views/templates/chun_view.html',
        controller: 'ChunController'
      })
      .when('/dhalsim', {
        templateUrl: '/views/templates/dhalsim_view.html',
        controller: 'DhalsimController'
      })
      .when('/fang', {
        templateUrl: '/views/templates/fang_view.html',
        controller: 'FangController'
      })
      .when('/karin', {
        templateUrl: '/views/templates/karin_view.html',
        controller: 'KarinController'
      })
      .when('/ken', {
        templateUrl: '/views/templates/ken_view.html',
        controller: 'KenController'
      })
      .when('/laura', {
        templateUrl: '/views/templates/laura_view.html',
        controller: 'LauraController'
      })
      .when('/rmika', {
        templateUrl: '/views/templates/mika_view.html',
        controller: 'MikaController'
      })
      .when('/nash', {
        templateUrl: '/views/templates/nash_view.html',
        controller: 'NashController'
      })
      .when('/necalli', {
        templateUrl: '/views/templates/necalli_view.html',
        controller: 'NecalliController'
      })
      .when('/rashid', {
        templateUrl: '/views/templates/rashid_view.html',
        controller: 'RashidController'
      })
      .when('/ryu', {
        templateUrl: '/views/templates/ryu_view.html',
        controller: 'RyuController'
      })
      .when('/vega', {
        templateUrl: '/views/templates/vega_view.html',
        controller: 'VegaController'
      })
      .when('/zangief', {
        templateUrl: '/views/templates/zangief_view.html',
        controller: 'ZangiefController'
      })
      .otherwise({
        redirectTo: 'birdie'
      });
  }]);

myApp.controller('UserController', ['$scope', '$http', '$window', 'DataFactory', function($scope, $http, $window, DataFactory) {
  var dataFactory = DataFactory;
  dataFactory.getUser().then(function(){$scope.playerName = dataFactory.userName();});

}]);