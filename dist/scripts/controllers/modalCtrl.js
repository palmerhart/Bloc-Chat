(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
        this.createNewRoom = function () {
            Room.addRoom(this.newChatRoom);
            this.newChatRoom = {};
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();