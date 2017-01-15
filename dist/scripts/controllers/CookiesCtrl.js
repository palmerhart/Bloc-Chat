(function () {
    function CookiesCtrl($scope, $uibModal, $cookies, $uibModalInstance) {
                
        $scope.addUserName = function (userInputName) {
            if(!userInputName || userInputName === "") {                
                return;
            }
            
            $cookies.put('userName', userInputName);
            location.reload();
            $uibModalInstance.close();            
        };               
        
        return $scope;
    }
    
    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$scope','$uibModal', '$cookies', '$uibModalInstance', CookiesCtrl]);
})();


//            $scope.currentUser = userInputName;
//            location.reload();  
//        $scope.currentUser = $cookies.get('userName');
//        $scope.currentUser = "";