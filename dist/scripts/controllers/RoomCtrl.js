(function () {
    function RoomCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room;
        $scope.currentRoom = null;
        
        $scope.open = function () {
            $uibModal.open({
                templateUrl: '/templates/newRoom.html',
                controller: 'ModalCtrl'
            })
        };
        
        return $scope.rooms;
            
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', '$uibModal', RoomCtrl]);
})();