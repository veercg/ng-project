(function() {
    'use strict';

    angular
        .module('app')
        .factory('activeTabfactory', factory);

    factory.$inject = ['$rootScope'];

    /* @ngInject */
    function factory($rootScope) {
        var headerTabs = {active: 'home'};
        var service = {
            headerTabs: headerTabs,
            setSelectedTab: setSelectedTab
        };

        return service;

        function setSelectedTab(newTab) {
          headerTabs.active = newTab;
        }
    }
})();
