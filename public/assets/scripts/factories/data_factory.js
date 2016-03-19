myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var facMatchData = undefined;
    var facUserIdNumber = undefined;
    var facUserName = undefined;
    var facStatData = undefined;
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
    var facCharLinkList = [
        'birdie', 'cammy', 'chun', 'dhalsim', 'fang', 'karin', 'ken', 'laura',
        'bison', 'nash', 'necalli', 'rashid', 'rmika', 'ryu', 'vega', 'zangief'
    ];
    var facImgThumbnails = {
      birdie:  "/assets/images/birdie.png",
      cammy:  "/assets/images/cammy.png",
      chunli:  "/assets/images/chunli.png",
      dhalsim:  "/assets/images/dhalsim.png",
      fang:  "/assets/images/fang.png",
      karin:  "/assets/images/karin.png",
      ken:  "/assets/images/ken.png",
      laura:  "/assets/images/laura.png",
      mbison:  "/assets/images/mbison.png",
      nash:  "/assets/images/nash.png",
      necalli:  "/assets/images/necalli.png",
      rashid:  "/assets/images/rashid.png",
      rmika:  "/assets/images/r-mika.png",
      ryu:  "/assets/images/ryu.png",
      vega:  "/assets/images/vega.png",
      zangief:  "/assets/images/zangief.png"
    };

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

    var facGetPlayerStats = function() {
        console.log('getting data from server');
        var promise = $http.get('/data/stats/' + facUserIdNumber).then(function(response) {
            facStatData = response.data;
            console.log('Async data response:', facMatchData);
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


    //PUBLIC
    var dataFactoryOutput = {
        matchData: function() {
            return facMatchData;
        },
        userIdNumber: function() {
            return facUserIdNumber;
        },
        aoiTagsArray: function() {
            return facAoiTags;
        },
        charLinkList: function() {
            return facCharLinkList;
        },
        charList: function() {
            return facCharList;
        },
        ImgThumbnails: function() {
            return facImgThumbnails;
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
        pushToFacAoiTags: function(newItem) {
            return facPushToFacAoiTags(newItem);
        },
        removeFromFacAoiTags: function(oldItem) {
            return facRemoveFromFacAoiTags(oldItem);
        },
        postMatchData: function(match) {
            return facPostMatchData(match);
        }
    };

    return dataFactoryOutput;

}]);