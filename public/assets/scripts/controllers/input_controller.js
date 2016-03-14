myApp.controller('InputController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Im in input controller');
  var dataFactory = DataFactory;
  $scope.charList = [
    'Birdie', 'Cammy', 'Chun-Li', 'Dhalsim', 'F.A.N.G.', 'Karin', 'Ken', 'Laura',
    'M. Bison', 'Nash', 'Necalli', 'Rashid', 'R. Mika', 'Ryu', 'Vega', 'Zangief'
  ];



  $scope.matchData = {
    roundOne: '',
    roundTwo: '',
    roundThree: null,
    oCharacter: '',
    character: '',
    notes: '',
    winLoss: '',
    relStr: '',
    antiAirs: null,
    execution: null,
    crossUps: null,
    wakeUp: null,
    okizeme: null,
    teching: null,
    spacing: null,
    footsies: null,
    hitConfirms: null,
    hiLow: null,
    reads: null,
    gettingIn: null
  };

  dataFactory.getUser().then(function(){
    $scope.matchData.userId = dataFactory.userIdNumber();
    console.log($scope.matchData.userId);
  });


  $scope.roundThreeToggle = function(){
    if(($scope.matchData.roundOne == 'win' && $scope.matchData.roundTwo == 'loss') || ($scope.matchData.roundOne == 'loss' && $scope.matchData.roundTwo == 'win')){
      return true;} else {return false;}
    };

  $scope.matchResult = function(){
    if(($scope.matchData.roundOne == 'win' && $scope.matchData.roundTwo == 'win') ||
       ($scope.matchData.roundOne == 'win' && $scope.matchData.roundThree == 'win') ||
       ($scope.matchData.roundTwo == 'win' && $scope.matchData.roundThree == 'win')){
      $scope.matchData.winLoss = 'win';
        return true;
    } else {$scope.matchData.winLoss = 'loss';}
  };
  $scope.postMatch = function(){
    console.log($scope.matchData.userId);
    dataFactory.postMatchData($scope.matchData);
  }

}]);