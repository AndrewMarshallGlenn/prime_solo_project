myApp.controller('InputController', ['$scope', function($scope) {
  console.log('Im in input controller');
  $scope.charList = [
    'Birdie', 'Cammy', 'Chun-Li', 'Dhalsim', 'F.A.N.G.', 'Karin', 'Ken', 'Laura',
    'M. Bison', 'Nash', 'Necalli', 'Rashid', 'R. Mika', 'Ryu', 'Vega', 'Zangief'
  ];

  var matchData = {};

  $scope.roundOne = '';
  $scope.roundTwo = '';
  $scope.roundThree = null;
  $scope.oCharacter = '';
  $scope.character = '';
  $scope.notes = '';
  $scope.winLoss = '';
  $scope.relStr = '';
  $scope.antiAirs = null;
  $scope.execution = null;
  $scope.crossUps = null;
  $scope.wakeUp = null;
  $scope.okizeme = null;
  $scope.teching = null;
  $scope.spacing = null;
  $scope.footsies = null;
  $scope.hitConfirms = null;
  $scope.hiLow = null;
  $scope.reads = null;
  $scope.gettingIn = null;

  matchData = {
    character: $scope.character,
    oCharacter: $scope.oCharacter,
    relStr: $scope.relStr,
    roundOne: $scope.roundOne,
    roundTwo: $scope.roundTwo,
    roundThree: $scope.roundThree,
    outcome: $scope.winLoss,
    notes: $scope.notes,
    antiAirs: $scope.antiAirs,
    execution: $scope.execution,
    crossUps: $scope.crossUps,
    wakeUp: $scope.wakeUp,
    okizeme: $scope.okizeme,
    teching: $scope.teching,
    spacing: $scope.spacing,
    footsies: $scope.footsies,
    hitConfirms: $scope.hitConfirms,
    hiLow: $scope.hiLow,
    reads: $scope.reads,
    gettingIn: $scope.gettingIn,
    userId:

  };

  $scope.roundThreeToggle = function(){
    if(($scope.roundOne == 'win' && $scope.roundTwo == 'loss') || ($scope.roundOne == 'loss' && $scope.roundTwo == 'win')){
      return true;} else {return false;}
    };

  $scope.matchResult = function(){
    if(($scope.roundOne == 'win' && $scope.roundTwo == 'win') ||
       ($scope.roundOne == 'win' && $scope.roundThree == 'win') ||
       ($scope.roundTwo == 'win' && $scope.roundThree == 'win')){
        $scope.winLoss = 'true';
        return true;
    } else {$scope.winLoss = null;}
  };


}]);