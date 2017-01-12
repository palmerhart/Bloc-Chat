(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            all: messages,
            getByRoomId: function (roomId) {  
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();

// need to use orderByChild() and equalTo() chained together somehow to query propery messages by roomId