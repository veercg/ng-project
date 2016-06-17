(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', Controller);

    Controller.$inject = ['$scope'];

    /* @ngInject */
    function Controller($scope) {
        var vm = this;
        vm.message = "This is a angular boilerplate to kickstart a project.";

    }
})();
