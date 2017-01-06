( function () {
    function newRoomCtrl(newRoom) {
        this.newestRoom = newRoom.roomName;
        
        var launchNew = $Modal.open({
            templateURL: '/templates/newRoom.html',
            controller: '/controllers/NewRoomCtrl'
        });
        
        
        
    }
    
    angular
        .module('blocChat')
        .controller('newRoomCtrl', ['Room', newRoomCtrl])
    
})();