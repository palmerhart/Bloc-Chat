(function () {
    function RoomCtrl($scope, Room, $uibModal, Message, $cookies) {
        $scope.rooms = Room.all;
        $scope.messages = Message.all;
        $scope.currentUser = "";
                
        $scope.open = function () {
            $uibModal.open({
                templateUrl: '/templates/newRoom.html',
                controller: 'ModalCtrl as modal'
            })            
        };
        
        $scope.currentRoom = "Choose Your Room";
        $scope.currrentRoomId = "tbd";
        $scope.activeRoomMessages = "this should change to messages when chat room clicked on";
        
        $scope.setCurrentRoom = function(aRoom){
            $scope.currentRoom = aRoom.name;
            $scope.activeRoomMessages = Message.getByRoomId(aRoom.$id);
            $scope.currentRoomId = aRoom.$id;
        };  
        
        $scope.currentUser = $cookies.get('userName');
        
        //create a controller method that is invoked via ngClick or ngSubmit on frontend
        $scope.newChatText = "";      
        
        $scope.addNewChat = function (newChatText, currentRoomId, currentUser) {            
            Message.send ({
                content: $scope.newChatText,
                roomId: $scope.currentRoomId,
                sentAt: "12:45",
                username: $scope.currentUser               
            });
            $scope.newChatText = "";
        };
        
        
        
        return $scope;           
    }   
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', '$uibModal', 'Message', '$cookies', RoomCtrl]);
})();

//$scope.rooms[0].name is first name of chat room in array