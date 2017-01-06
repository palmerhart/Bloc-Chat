( function () {
    function newRoomCtrl(newRoom) {
        this.newestRoom = newRoom.$value;
        
        this.launchNew = $uibModal.open({
            templateURL: '/templates/newRoom.html',
            controller: '/controllers/NewRoomCtrl'
        });
        
        
        
    }
    
    angular
        .module('blocChat')
        .controller('newRoomCtrl', ['Room', 'RoomCtrl', newRoomCtrl])
    
})();