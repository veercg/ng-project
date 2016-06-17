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
          .state('home',{
            url: "/",
            views: {
              'header': {
                templateUrl: './views/partials/header.html',
                controller: 'headerCtrl as vm'
              },
              'content': {
                templateUrl: './views/home.html',
                controller:'homeCtrl as vm'
              }
            }
          })
          .state('about',{
            url: "/about",
            views: {
              'header': {
                templateUrl: './views/partials/header.html',
                controller: 'headerCtrl as vm'
              },
              'content': {
                templateUrl: './views/about.html',
                controller:'aboutCtrl as vm'
              }
            }
          });

    }
})();
