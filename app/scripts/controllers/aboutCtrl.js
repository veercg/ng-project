(function() {
    'use strict';

    angular
        .module('app')
        .controller('aboutCtrl', Controller);

    Controller.$inject = ['$scope'];

    /* @ngInject */
    function Controller($scope) {
        var vm = this;
        vm.message = "This is a made with love.";

    }
})();
