/**
 * Created by andrewglenn on 3/3/16.
 */
myApp.controller('DashboardController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Im in dashboard controller');

  var dataFactory = DataFactory;
  $scope.pWinPercent = '';
  $scope.pWinPercent10 = '';
  $scope.pWinPercent25 = '';
  $scope.topUsed = '';
  $scope.topUsed2 = '';
  $scope.topUsed3 = '';
  $scope.topUsedImg = '';
  $scope.topUsed2Img = '';
  $scope.topUsed3Img = '';

  $scope.characters = [
    {path:  "/assets/images/birdie.png",
     link: '#birdie'},
    {path:  "/assets/images/cammy.png",
     link: '#cammy'},
    {path:  "/assets/images/chunli.png",
     link: '#chun'},
    {path:  "/assets/images/dhalsim.png",
     link: '#dhalsim'},
    {path:  "/assets/images/fang.png",
     link: '#fang'},
    {path:  "/assets/images/karin.png",
     link: '#karin'},
    {path:  "/assets/images/ken.png",
     link: '#ken'},
    {path:  "/assets/images/laura.png",
     link: '#laura'},
    {path:  "/assets/images/mbison.png",
     link: '#bison'},
    {path:  "/assets/images/nash.png",
     link: '#nash'},
    {path:  "/assets/images/necalli.png",
     link: '#necalli'},
    {path:  "/assets/images/rashid.png",
     link: '#rashid'},
    {path:  "/assets/images/r-mika.png",
     link: '#rmika'},
    {path:  "/assets/images/ryu.png",
     link: '#ryu'},
    {path:  "/assets/images/vega.png",
     link: '#vega'},
    {path:  "/assets/images/zangief.png",
     link: '#zangief'}
  ];

  dataFactory.getUser().then(function(){
    dataFactory.getPlayerWinPercent().then(function(){
      $scope.pWinPercent = dataFactory.playerWinPercent();
    });
    dataFactory.getPlayerWinPercentLastN().then(function(){
      $scope.pWinPercent10 = dataFactory.playerWinPercent10();
      $scope.pWinPercent25 = dataFactory.playerWinPercent25();
    });
  });

  dataFactory.getUser().then(function(){
    dataFactory.getTop3Used().then(function(){
      $scope.topUsed = dataFactory.mostUsed();
      $scope.topUsed2 = dataFactory.mostUsed2();
      $scope.topUsed3 = dataFactory.mostUsed3();
      $scope.topUsedImg = dataFactory.mostUsedImg();
      $scope.topUsed2Img = dataFactory.mostUsed2Img();
      $scope.topUsed3Img = dataFactory.mostUsed3Img();
    });
  });

}]);