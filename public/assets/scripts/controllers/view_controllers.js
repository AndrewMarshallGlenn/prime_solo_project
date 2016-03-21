myApp.controller('BirdieController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Birdie';
  dataFactory.getMostCommonTag(1).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('BisonController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'M. Bison';
  dataFactory.getMostCommonTag(9).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('CammyController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Cammy';
  dataFactory.getMostCommonTag(2).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('ChunController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Chun Li';
  dataFactory.getMostCommonTag(3).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('DhalsimController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Dhalsim';
  dataFactory.getMostCommonTag(4).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('FangController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'F.A.N.G.';
  dataFactory.getMostCommonTag(5).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('KarinController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Karin';
  dataFactory.getMostCommonTag(6).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('KenController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Ken';
  dataFactory.getMostCommonTag(7).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('LauraController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'aura';
  dataFactory.getMostCommonTag(8).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('MikaController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Mika';
  dataFactory.getMostCommonTag(13).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('NashController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Nash';
  dataFactory.getMostCommonTag(10).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('NecalliController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Necalli';
  dataFactory.getMostCommonTag(11).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('RashidController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Rashid';
  dataFactory.getMostCommonTag(12).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('RyuController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Ryu';
  dataFactory.getMostCommonTag(14).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('VegaController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Vega';
  dataFactory.getMostCommonTag(15).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);

myApp.controller('ZangiefController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  var dataFactory = DataFactory;
  var tag = '';
  $scope.character = 'Zangief';
  dataFactory.getMostCommonTag(16).then(function(){
    tag = dataFactory.topTag();
    $scope.charactersTopTag = dataFactory.tagSwitch(tag);
  });

}]);