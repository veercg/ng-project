(function() {
    'use strict';

    angular
        .module('app')
        .controller('headerCtrl', Controller);

    Controller.$inject = ['activeTabfactory'];

    /* @ngInject */
    function Controller(activeTabfactory) {
        var vm = this;
        vm.title = getTitle();
        vm.selectedTab = activeTabfactory.headerTabs.active;
        vm.setSelectedTab = activeTabfactory.setSelectedTab;

        // Details
        function getTitle(){
          return "Sample Project";
        }

    }
})();
