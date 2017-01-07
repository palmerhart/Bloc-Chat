(function () {
    function ModalCtrl($uibModal) {
        this.newChat = function() {
            var modalInstance = $uibModal.open({
                templateURL: '/templates/newRoom.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.cancel = function() {
                        Modal.dismiss('Cancel');                        
                    };
                    
                    $scope.create = function() {
                        Modal.close();
                    };
                }
            });
        }       
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl])
    
})();