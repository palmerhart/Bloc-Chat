(function () {
    function CookiesCtrl($scope, $uibModal, $cookies, $uibModalInstance) {
        
        $scope.currentUser = "";
        
        
        $scope.addUserName = function (userInputName) {
            if(!userInputName || userInputName === "") {
                return;
            }
            
            $cookies.put('userName', userInputName);           
            $uibModalInstance.close();
        };
        

        
        return $scope;
    }
    
    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$scope','$uibModal', '$cookies', '$uibModalInstance', CookiesCtrl]);
})();