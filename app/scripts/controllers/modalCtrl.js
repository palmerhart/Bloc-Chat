(function () {
    function ModalCtrl(Room, $uibModalInstance, $scope) {
        
        $scope.newRoom = {};
        
        $scope.newRoom.name = "test name";
        
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
        $scope.createNewRoom = function () {
            Room.addRoom = {name: ''};            
            $uibModalInstance.close($scope.newRoom);
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();