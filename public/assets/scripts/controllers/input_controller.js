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

  $scope.aoiTagsString = '';
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
    $scope.matchData.aoiTags.push(' Anti-Airs');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('1');
  };
  $scope.antiAirFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Anti-Airs');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.antiAirs = null;
    dataFactory.removeFromFacAoiTags('1');
  };
  $scope.executionTrue = function(){
    $scope.execution = '2';
    $scope.matchData.aoiTags.push(' Execution');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('2');
  };
  $scope.executionFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Execution');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.execution = null;
    dataFactory.removeFromFacAoiTags('2');
  };
  $scope.crossUpsTrue = function(){
    $scope.crossUps = '3';
    $scope.matchData.aoiTags.push(' Cross-Ups');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('3');
  };
  $scope.crossUpsFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Cross-Ups');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.crossUps = null;
    dataFactory.removeFromFacAoiTags('3');
  };
  $scope.wakeUpTrue = function(){
    $scope.wakeUp = '4';
    $scope.matchData.aoiTags.push(' Wake-Up');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('4');
  };
  $scope.wakeUpFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Wake-Up');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.wakeUp = null;
    dataFactory.removeFromFacAoiTags('4');
  };
  $scope.okizemeTrue = function(){
    $scope.okizeme = '5';
    $scope.matchData.aoiTags.push(' Okizeme');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('5');
  };
  $scope.okizemeFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Okizeme');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.okizeme = null;
    dataFactory.removeFromFacAoiTags('5');
  };
  $scope.techingTrue = function(){
    $scope.teching = '6';
    $scope.matchData.aoiTags.push(' Teching');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('6');
  };
  $scope.techingFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Teching');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.teching = null;
    dataFactory.removeFromFacAoiTags('6');
  };
  $scope.spacingTrue = function(){
    $scope.spacing = '7';
    $scope.matchData.aoiTags.push(' Spacing');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('7');
  };
  $scope.spacingFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Spacing');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.spacing = null;
    dataFactory.removeFromFacAoiTags('7');
  };
  $scope.footsiesTrue = function(){
    $scope.footsies = '8';
    $scope.matchData.aoiTags.push(' Footsies');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('8');
  };
  $scope.footsiesFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Footsies');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.footsies = null;
    dataFactory.removeFromFacAoiTags('8');
  };
  $scope.hitConfirmsTrue = function(){
    $scope.hitConfirms = '9';
    $scope.matchData.aoiTags.push(' Hit-Confirms');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('9');
  };
  $scope.hitConfirmsFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Hit-Confirms');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.hitConfirms = null;
    dataFactory.removeFromFacAoiTags('9');
  };
  $scope.hiLowTrue = function(){
    $scope.hiLow = '10';
    $scope.matchData.aoiTags.push(' Hi-Low');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('10');
  };
  $scope.hiLowFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Hi-Low');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.hiLow = null;
    dataFactory.removeFromFacAoiTags('10');
  };
  $scope.readsTrue = function(){
    $scope.reads = '11';
    $scope.matchData.aoiTags.push(' Reads');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('11');
  };
  $scope.readsFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Reads');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    $scope.reads = null;
    dataFactory.removeFromFacAoiTags('11');
  };
  $scope.gettingInTrue = function(){
    $scope.gettingIn = '12';
    $scope.matchData.aoiTags.push(' Getting-In');
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
    dataFactory.pushToFacAoiTags('12');
  };
  $scope.gettingInFalse = function(){
    var index = $scope.matchData.aoiTags.indexOf(' Getting-In');
    if (index > -1) {
      $scope.matchData.aoiTags.splice(index, 1);
    }
    $scope.aoiTagsString = $scope.matchData.aoiTags.toString();
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