/**
 * Created by andrewglenn on 3/3/16.
 */
myApp.controller('PlayerController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Im in Player controller');

  var dataFactory = DataFactory;
  console.log('Im in PlayerController');
  $scope.test = 'bananas';

}]);