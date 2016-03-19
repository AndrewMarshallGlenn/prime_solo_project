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
    aoiTags: []
  };

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

  dataFactory.getUser().then(function(){
    $scope.matchData.userId = dataFactory.userIdNumber();
    console.log('user:', $scope.matchData.userId);
  });

  $scope.antiAirTrue = function(){
    $scope.antiAirs = '1';
    dataFactory.pushToFacAoiTags('1');
  };
  $scope.antiAirFalse = function(){
    $scope.antiAirs = null;
    dataFactory.removeFromFacAoiTags('1');
  };
  $scope.executionTrue = function(){
    $scope.execution = '2';
    dataFactory.pushToFacAoiTags('2');
  };
  $scope.executionFalse = function(){
    $scope.execution = null;
    dataFactory.removeFromFacAoiTags('2');
  };
  $scope.crossUpsTrue = function(){
    $scope.crossUps = '3';
    dataFactory.pushToFacAoiTags('3');
  };
  $scope.crossUpsFalse = function(){
    $scope.crossUps = null;
    dataFactory.removeFromFacAoiTags('3');
  };
  $scope.wakeUpTrue = function(){
    $scope.wakeUp = '4';
    dataFactory.pushToFacAoiTags('4');
  };
  $scope.wakeUpFalse = function(){
    $scope.wakeUp = null;
    dataFactory.removeFromFacAoiTags('4');
  };
  $scope.okizemeTrue = function(){
    $scope.okizeme = '5';
    dataFactory.pushToFacAoiTags('5');
  };
  $scope.okizemeFalse = function(){
    $scope.okizeme = null;
    dataFactory.removeFromFacAoiTags('5');
  };
  $scope.techingTrue = function(){
    $scope.teching = '6';
    dataFactory.pushToFacAoiTags('6');
  };
  $scope.techingFalse = function(){
    $scope.teching = null;
    dataFactory.removeFromFacAoiTags('6');
  };
  $scope.spacingTrue = function(){
    $scope.spacing = '7';
    dataFactory.pushToFacAoiTags('7');
  };
  $scope.spacingFalse = function(){
    $scope.spacing = null;
    dataFactory.removeFromFacAoiTags('7');
  };
  $scope.footsiesTrue = function(){
    $scope.footsies = '8';
    dataFactory.pushToFacAoiTags('8');
  };
  $scope.footsiesFalse = function(){
    $scope.footsies = null;
    dataFactory.removeFromFacAoiTags('8');
  };
  $scope.hitConfirmsTrue = function(){
    $scope.hitConfirms = '9';
    dataFactory.pushToFacAoiTags('9');
  };
  $scope.hitConfirmsFalse = function(){
    $scope.hitConfirms = null;
    dataFactory.removeFromFacAoiTags('9');
  };
  $scope.hiLowTrue = function(){
    $scope.hiLow = '10';
    dataFactory.pushToFacAoiTags('10');
  };
  $scope.hiLowFalse = function(){
    $scope.hiLow = null;
    dataFactory.removeFromFacAoiTags('10');
  };
  $scope.readsTrue = function(){
    $scope.reads = '11';
    dataFactory.pushToFacAoiTags('11');
  };
  $scope.readsFalse = function(){
    $scope.reads = null;
    dataFactory.removeFromFacAoiTags('11');
  };
  $scope.gettingInTrue = function(){
    $scope.gettingIn = '12';
    dataFactory.pushToFacAoiTags('12');
  };
  $scope.gettingInFalse = function(){
    $scope.gettingIn = null;
    dataFactory.removeFromFacAoiTags('12');
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
    $scope.matchData.aoiTags = dataFactory.aoiTagsArray();
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