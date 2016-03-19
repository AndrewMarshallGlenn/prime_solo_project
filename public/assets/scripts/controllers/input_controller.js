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
    aoiTags: [],
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
    console.log('user:', $scope.matchData.userId);
  });

  $scope.antiAirTrue = function(){
    $scope.matchData.antiAirs = '1';
  };
  $scope.antiAirFalse = function(){
    $scope.matchData.antiAirs = null;
  };
  $scope.executionTrue = function(){
    $scope.matchData.execution = '2';
  };
  $scope.executionFalse = function(){
    $scope.matchData.execution = null;
  };
  $scope.crossUpsTrue = function(){
    $scope.matchData.crossUps = '3';
  };
  $scope.crossUpsFalse = function(){
    $scope.matchData.crossUps = null;
  };
  $scope.wakeUpTrue = function(){
    $scope.matchData.wakeUp = '4';
  };
  $scope.wakeUpFalse = function(){
    $scope.matchData.wakeUp = null;
  };
  $scope.okizemeTrue = function(){
    $scope.matchData.okizeme = '5';
  };
  $scope.okizemeFalse = function(){
    $scope.matchData.okizeme = null;
  };
  $scope.techingTrue = function(){
    $scope.matchData.teching = '6';
  };
  $scope.techingFalse = function(){
    $scope.matchData.teching = null;
  };
  $scope.spacingTrue = function(){
    $scope.matchData.spacing = '7';
  };
  $scope.spacingFalse = function(){
    $scope.matchData.spacing = null;
  };
  $scope.footsiesTrue = function(){
    $scope.matchData.footsies = '8';
  };
  $scope.footsiesFalse = function(){
    $scope.matchData.footsies = null;
  };
  $scope.hitConfirmsTrue = function(){
    $scope.matchData.hitConfirms = '9';
  };
  $scope.hitConfirmsFalse = function(){
    $scope.matchData.hitConfirms = null;
  };
  $scope.hiLowTrue = function(){
    $scope.matchData.hiLow = '10';
  };
  $scope.hiLowFalse = function(){
    $scope.matchData.hiLow = null;
  };
  $scope.readsTrue = function(){
    $scope.matchData.reads = '11';
  };
  $scope.readsFalse = function(){
    $scope.matchData.reads = null;
  };
  $scope.gettingInTrue = function(){
    $scope.matchData.gettingIn = '12';
  };
  $scope.gettingInFalse = function(){
    $scope.matchData.gettingIn = null;
  };

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