(function () {
    function Room($firebaseArray, newRoom) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var addRoom = rooms.$add(newRoom);
        
        return {
            all: rooms
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();