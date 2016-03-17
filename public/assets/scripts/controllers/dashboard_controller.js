/**
 * Created by andrewglenn on 3/3/16.
 */
myApp.controller('DashboardController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Im in dashboard controller');

  var dataFactory = DataFactory;
  $scope.playerStats = 'player Stats';

  $scope.charLinks = dataFactory.charLinkList();

  $scope.charImages = [
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

     $scope.test = 'bananas';



}]);