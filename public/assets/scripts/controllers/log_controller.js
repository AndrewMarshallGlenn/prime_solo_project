myApp.controller('LogController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Im in log controller');

  var dataFactory = DataFactory;
  var userId = '';
  $scope.matchList = [];

  dataFactory.getUser().then(function(){
    userId = dataFactory.userIdNumber();
    console.log(userId);
    dataFactory.getMatchData().then(function(){
      $scope.matchList = dataFactory.matchData();
      console.log('$scope.matchList: ' + $scope.matchList);
    });
  });







}]);