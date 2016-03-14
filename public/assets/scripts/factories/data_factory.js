myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var facMatchData = undefined;
    var facUserIdNumber = undefined;
    var facUserName = undefined;

    var facGetMatchData = function() {
        console.log('getting data from server');
        var promise = $http.get('/data/' + facUserIdNumber).then(function(response) {
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
    var facGetUser = function(){
        var promise = $http.get('/user').then(function(response) {
            if(response.data) {
                facUserName = response.data.username;
                facUserIdNumber = response.data.id;

                console.log('Username: ', facUserName);
                console.log('User ID: ', facUserIdNumber);
            } else {
                $window.location.href = '/index.html';
            }
        });

        return promise;
    };


    //PUBLIC
    var dataFactoryOutput = {
        matchData: function() {
            return facMatchData;
        },
        userIdNumber: function() {
            return facUserIdNumber;
        },
        userName: function() {
            return facUserName;
        },
        getUser: function() {
            return facGetUser();
        },
        getMatchData: function() {
            return facGetMatchData();
        },
        postMatchData: function(match) {
            return facPostMatchData(match);
        }
    };

    return dataFactoryOutput;

}]);