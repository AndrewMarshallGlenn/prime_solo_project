var myApp = angular.module('myApp', []);

myApp.controller('UserController', ['$scope', '$http', '$window', 'DataFactory', function($scope, $http, $window, DataFactory) {
  var dataFactory = DataFactory;
  dataFactory.getUser().then(function(){$scope.playerName = dataFactory.userName();});




  // This happens after page load, which means it has authenticated if it was ever going to
  // NOT SECURE
  //$http.get('/user').then(function(response) {
  //  if(response.data) {
  //    $scope.userName = response.data.username;
  //    $scope.userId = response.data.id;
  //
  //    console.log('User Data: ', $scope.userName);
  //    console.log('User ID: ', $scope.userId)
  //  } else {
  //    $window.location.href = '/index.html';
  //  }
  //});
}]);