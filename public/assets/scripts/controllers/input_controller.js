myApp.controller('InputController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Im in input controller');
  var dataFactory = DataFactory;

  $scope.characters = dataFactory.charList();

  $scope.matchData = {
    roundOne: '',
    roundTwo: '',
    roundThree: null,
    oCharacter: '',
    character: '',
    notes: '',
    winLoss: '',
    relStr: '',
    antiAirs: '1',
    execution: '2',
    crossUps: '3',
    wakeUp: '4',
    okizeme: '5',
    teching: '6',
    spacing: '7',
    footsies: '8',
    hitConfirms: '9',
    hiLow: '10',
    reads: '11',
    gettingIn: '12'
  };
  //antiAirs: null,
  //  execution: null,
  //  crossUps: null,
  //  wakeUp: null,
  //  okizeme: null,
  //  teching: null,
  //  spacing: null,
  //  footsies: null,
  //  hitConfirms: null,
  //  hiLow: null,
  //  reads: null,
  //  //gettingIn: null

  dataFactory.getUser().then(function(){
    $scope.matchData.userId = dataFactory.userIdNumber();
    console.log('user:', $scope.matchData.userId);
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
    console.log('post match id: ', $scope.matchData.userId);
    dataFactory.postMatchData($scope.matchData);
  };




  function imgThumbs(char){
    switch(char) {
      case 'Birdie':
        result = "/assets/images/birdie.png";
        return result;
      case 'Cammy':
        result = "/assets/images/cammy.png";
        return result;
      case 'Chun-Li':
        result = "/assets/images/chunli.png";
        return result;
      case 'Dhalsim':
        result = "/assets/images/dhalsim.png";
        return result;
      case 'F.A.N.G.':
        result = "/assets/images/fang.png";
        return result;
      case 'Karin':
        result = "/assets/images/karin.png";
        return result;
      case 'Ken':
        result = "/assets/images/ken.png";
        return result;
      case 'Laura':
        result = "/assets/images/laura.png";
        return result;
      case 'M. Bison':
        result = "/assets/images/mbison.png";
        return result;
      case 'Nash':
        result = "/assets/images/nash.png";
        return result;
      case 'Necalli':
        result = "/assets/images/necalli.png";
        return result;
      case 'Rashid':
        result = "/assets/images/rashid.png";
        return result;
      case 'R. Mika':
        result = "/assets/images/r-mika.png";
        return result;
      case 'Ryu':
        result = "/assets/images/ryu.png";
        return result;
      case 'Vega':
        result = "/assets/images/vega.png";
        return result;
      case 'Zangief':
        result = "/assets/images/zangief.png";
        return result;
    }
  }


}]);