myApp.controller('InputController', ['$scope', function($scope) {
  console.log('Im in input controller');
  $scope.charList = [
    'Birdie', 'Cammy', 'Chun-Li', 'Dhalsim', 'F.A.N.G.', 'Karin', 'Ken', 'Laura',
    'M. Bison', 'Nash', 'Necalli', 'Rashid', 'R. Mika', 'Ryu', 'Vega', 'Zangief'
  ];

  $scope.roundOne = '';
  $scope.roundTwo = '';
  $scope.roundThree = '';
  $scope.Ocharacter = '';
  $scope.character = '';
  $scope.notes = '';
  $scope.winLoss = '';

  $scope.roundThreeToggle = function(){
    if(($scope.roundOne == 'win' && $scope.roundTwo == 'loss') || ($scope.roundOne == 'loss' && $scope.roundTwo == 'win')){
      return true;} else {return false;}
    };


}]);