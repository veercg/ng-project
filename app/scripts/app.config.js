(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller:'homeCtrl',
                controllerAs: 'vm'
            })
            .state('about', {
                url: "/about",
                templateUrl: "views/about.html",
                controller:'aboutCtrl',
                controllerAs: 'vm'
            })

    }
})();
