myApp.controller('LogController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Im in log controller');

  var dataFactory = DataFactory;
  var userId = '';
  $scope.matchList = [];
  $scope.characters = dataFactory.charList();
  $scope.character = '';

  dataFactory.getUser().then(function(){
    userId = dataFactory.userIdNumber();
    console.log(userId);
    dataFactory.getMatchData().then(function(){
      $scope.matchList = dataFactory.matchData();
      console.log('$scope.matchList: ' + $scope.matchList);
      console.log($scope.matchList[0]);
    });
  });

  $scope.charData = function() {
    dataFactory.getUser().then(function () {
      userId = dataFactory.userIdNumber();
      console.log(userId);
      dataFactory.getCharMatchData($scope.character.charId).then(function () {
        $scope.matchList = dataFactory.matchData();
        console.log('$scope.matchList: ' + $scope.matchList);
        console.log($scope.matchList[0]);
      });
    });
  }






}]);