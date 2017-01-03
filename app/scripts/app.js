(function() {
    function config($stateProvider) {
        $stateProvider
            .state('main', {
            
        });
    }
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
    
})();