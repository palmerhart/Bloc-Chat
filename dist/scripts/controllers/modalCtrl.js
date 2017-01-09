(function () {
    function ModalCtrl($scope, Room, $uibModalInstance) {
        
        $scope.rooms = Room;        
        
        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        $scope.createNewRoom = function () {
            $scope.rooms.rooms.$add({
                name: $scope.newName
            });
            
            $uibModalInstance.close();
        };
    }   
    
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', '$uibModalInstance', ModalCtrl]);
})();
