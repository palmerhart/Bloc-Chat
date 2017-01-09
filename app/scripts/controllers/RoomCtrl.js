(function () {
    function RoomCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
        this.open = function () {
            this.modalInstance = $uibModal.open({
                templateUrl: '/templates/newRoom.html',
                controller: "ModalCtrl"
            });
        };
            
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();