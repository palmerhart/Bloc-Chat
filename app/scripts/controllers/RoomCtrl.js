(function () {
    function RoomCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
        $scope.currentRoom = null;
        
        $scope.open = function () {
            $uibModal.open({
                templateUrl: '/templates/newRoom.html',
                controller: 'ModalCtrl as modal'
            })            
        };
        
        return $scope;
            
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', '$uibModal', RoomCtrl]);
})();