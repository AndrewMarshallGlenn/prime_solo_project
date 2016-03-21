myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var facMatchData = undefined;
    var facUserIdNumber = undefined;
    var facUserName = undefined;
    var facTopTag = undefined;
    var facPlayerWinPercent = undefined;
    var facPlayerWinPercent10 = undefined;
    var facPlayerWinPercent25 = undefined;
    var facMostUsed = '';
    var fac2MostUsed = '';
    var fac3MostUsed = '';
    var facMostUsedImg = '';
    var fac2MostUsedImg = '';
    var fac3MostUsedImg = '';
    var facLast25 = undefined;
    var facAoiTags = [];
    var facCharList = [
        {charId: '1', label: 'Birdie'},
        {charId: '2', label: 'Cammy'},
        {charId: '3', label: 'Chun-Li'},
        {charId: '4', label: 'Dhalsim'},
        {charId: '5', label: 'F.A.N.G.'},
        {charId: '6', label: 'Karin'},
        {charId: '7', label: 'Ken'},
        {charId: '8', label: 'Laura'},
        {charId: '9', label: 'M. Bison'},
        {charId: '10', label: 'Nash'},
        {charId: '11', label: 'Necalli'},
        {charId: '12', label: 'Rashid'},
        {charId: '13', label: 'R. Mika'},
        {charId: '14', label: 'Ryu'},
        {charId: '15', label: 'Vega'},
        {charId: '16', label: 'Zangief'}
    ];


    var facPushToFacAoiTags = function(newItem){
        facAoiTags.push(newItem);
        console.log('aoitagsarray in factory: '+facAoiTags);
    };

    var facRemoveFromFacAoiTags = function(oldItem){
        for(var i = facAoiTags.length - 1; i >= 0; i--) {
            if(facAoiTags[i] === oldItem) {
                facAoiTags.splice(i, 1);
            }
        }
        console.log('aoitagsarray in factory: '+facAoiTags);
    };

    var facGetMostCommonTag = function(character){
        var promise = $http.get('/data/chartag/' + character + '/' + facUserIdNumber).then(function(response) {
            var tagList = response.data;
            facTopTag = tagList[0].tags;
            console.log('Async data response:', tagList);
        });
        return promise;
    };

    var facGetTop3Used = function(){
        var promise = $http.get('/data/top3/' + facUserIdNumber).then(function(response) {
            var top3 = response.data;
            facMostUsed = top3[0].character;
            fac2MostUsed = top3[1].character;
            fac3MostUsed = top3[2].character;
            facMostUsedImg = top3[0].image;
            fac2MostUsedImg = top3[1].image;
            fac3MostUsedImg = top3[2].image;
            console.log('Async data response:', top3);
        });
        return promise;
    };

    var facGetPlayerWinPercent = function() {
        console.log('getting data from server for id: ', facUserIdNumber);
        var promise = $http.get('/data/winpercent/' + facUserIdNumber).then(function(response) {
            facPlayerWinPercent = response.data[0].win_percent;
            console.log('Async data response, facPlayerWinPercent: ', facPlayerWinPercent);
        });
        return promise;
    };

    var facGetPlayerWinPercentLastN = function() {
        console.log('getting data from server for id: ', facUserIdNumber);
        var promise = $http.get('/data/winpercentlastn/' + facUserIdNumber).then(function(response) {
            facLast25 = response.data;
            console.log('Async data response, facLast25: ', facLast25);
            var fac10 = 0;
            var fac25 = 0;
            for(var i = 0; i < facLast25.length; i++){
                if(facLast25[i].outcome == 'win'){
                    fac25++;
                }
            }
            console.log(fac25);
            facPlayerWinPercent25 = (fac25 / 25) * 100;
            for(var j = 0; j < 10; j++){
                if(facLast25[j].outcome == 'win'){
                    fac10++;
                }
            }
            console.log(fac10);
            facPlayerWinPercent10 = (fac10 / 10) * 100;
        });
        return promise;
    };

    var facGetMatchData = function() {
        console.log('getting data from server for id: ', facUserIdNumber);
        var promise = $http.get('/data/' + facUserIdNumber).then(function(response) {
            facMatchData = response.data;
            console.log('Async data response:', facMatchData);
        });
        return promise;
    };

    var facGetCharMatchData = function(char) {
        console.log('getting data from server for id: ', facUserIdNumber);
        var promise = $http.get('/data/chardata/' + char + '/' + facUserIdNumber).then(function(response) {
            facMatchData = response.data;
            console.log('Async data response:', facMatchData);
        });
        return promise;
    };

    var facPostMatchData = function(match) {
        console.log('posting match data');
        var promise = $http.post('/data', match).then(function(response) {
            console.log('match data saved');
            console.log(response);
            facAoiTags = [];
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

    function facTagSwitch(tag){
        switch(tag) {
            case 'anti_airs':
                result = "/assets/images/antiairs.png";
                return result;
            case 'execution':
                result = "/assets/images/execution.png";
                return result;
            case 'cross_ups':
                result = "/assets/images/crossups.png";
                return result;
            case 'wake_up':
                result = "/assets/images/wakeup.png";
                return result;
            case 'okizeme':
                result = "/assets/images/oki.png";
                return result;
            case 'teching':
                result = "/assets/images/teching.png";
                return result;
            case 'spacing':
                result = "/assets/images/spacing.png";
                return result;
            case 'footsies':
                result = "/assets/images/footsies.png";
                return result;
            case 'hit_confirms':
                result = "/assets/images/hitconfirms.png";
                return result;
            case 'hi_low':
                result = "/assets/images/hilow.png";
                return result;
            case 'reads':
                result = "/assets/images/reads.png";
                return result;
            case 'getting_in':
                result = "/assets/images/gettingin.png";
                return result;
        }
    }

    //PUBLIC
    var dataFactoryOutput = {
        matchData: function() {
            return facMatchData;
        },
        userIdNumber: function() {
            return facUserIdNumber;
        },
        playerWinPercent: function() {
            return facPlayerWinPercent;
        },
        playerWinPercent10: function() {
            return facPlayerWinPercent10;
        },
        playerWinPercent25: function() {
            return facPlayerWinPercent25;
        },
        mostUsed3: function() {
            return fac3MostUsed;
        },
        mostUsed2: function() {
            return fac2MostUsed;
        },
        mostUsed: function() {
            return facMostUsed;
        },
        mostUsed3Img: function() {
            return fac3MostUsedImg;
        },
        mostUsed2Img: function() {
            return fac2MostUsedImg;
        },
        mostUsedImg: function() {
            return facMostUsedImg;
        },
        topTag: function() {
            return facTopTag;
        },
        aoiTagsArray: function() {
            return facAoiTags;
        },
        charList: function() {
            return facCharList;
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
        getCharMatchData: function(char) {
            return facGetCharMatchData(char);
        },
        getMostCommonTag: function(character) {
            return facGetMostCommonTag(character);
        },
        getTop3Used: function() {
            return facGetTop3Used();
        },
        getPlayerWinPercent: function() {
            return facGetPlayerWinPercent();
        },
        getPlayerWinPercentLastN: function() {
            return facGetPlayerWinPercentLastN();
        },
        pushToFacAoiTags: function(newItem) {
            return facPushToFacAoiTags(newItem);
        },
        removeFromFacAoiTags: function(oldItem) {
            return facRemoveFromFacAoiTags(oldItem);
        },
        postMatchData: function(match) {
            return facPostMatchData(match);
        },
        tagSwitch: function(tag) {
            return facTagSwitch(tag);
        }
    };

    return dataFactoryOutput;

}]);