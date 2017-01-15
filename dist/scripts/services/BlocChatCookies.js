(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('userName');

        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/blocChatCookies.html',
                controller: 'CookiesCtrl as cookies',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

//this is a provider?