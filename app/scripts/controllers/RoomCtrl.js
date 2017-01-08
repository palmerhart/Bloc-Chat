(function () {
    function RoomCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
        this.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/newRoom.html'
            });
        };
            
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();