(function () {
    function RoomCtrl(Room) {
        this.rooms = firebase.database().ref().all();
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();