myApp.controller('BirdieController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'birdie';
  dataFactory.getMostCommonTag(1).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('BisonController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'bison';
  dataFactory.getMostCommonTag(9).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('CammyController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'cammy';
  dataFactory.getMostCommonTag(2).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('ChunController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'chun';
  dataFactory.getMostCommonTag(3).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('DhalsimController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'dhalsim';
  dataFactory.getMostCommonTag(4).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('FangController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'fang';
  dataFactory.getMostCommonTag(5).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('KarinController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'karin';
  dataFactory.getMostCommonTag(6).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('KenController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'ken';
  dataFactory.getMostCommonTag(7).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('LauraController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'laura';
  dataFactory.getMostCommonTag(8).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('MikaController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'mika';
  dataFactory.getMostCommonTag(13).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('NashController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'nash';
  dataFactory.getMostCommonTag(10).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('NecalliController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'necalli';
  dataFactory.getMostCommonTag(11).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('RashidController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'rashid';
  dataFactory.getMostCommonTag(12).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('RyuController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'ryu';
  dataFactory.getMostCommonTag(14).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('VegaController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'vega';
  dataFactory.getMostCommonTag(15).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);

myApp.controller('ZangiefController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  $scope.character = 'zangief';
  dataFactory.getMostCommonTag(16).then(function(){
    $scope.charactersTopTag = dataFactory.topTag();
  });

}]);