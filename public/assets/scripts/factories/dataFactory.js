myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var facMatchData = undefined;

    var facGetMatchData = function() {
        console.log('getting data from server');
        var promise = $http.get('/data').then(function(response) {
            facMatchData = response.data;
            console.log('Async data response:', facMatchData);
        });

        return promise;
    };

    var facPostMatchData = function(match) {
        console.log('posting match data');
        var promise = $http.post('/data', match).then(function(response) {
            console.log('match data saved');
            return facGetMatchData();
        });

        return promise;
    };


    //PUBLIC
    var dataFactoryOutput = {
        matchData: function() {
            return facMatchData;
        },
        getMatchData: function() {
            return facGetMatchData();
        },
        postMatchData: function(favorite) {
            return facPostMatchData(favorite);
        }
    };

    return dataFactoryOutput;

}]);