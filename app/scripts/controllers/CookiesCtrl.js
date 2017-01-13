(function () {
    function CookiesCtrl($scope, $uibModal, BlocChatCookies) {
        
        

        
        return $scope;
    }
    
    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$scope','BlocChatCookies', CookiesCtrl]);
})();