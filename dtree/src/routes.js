(function () {
  'use strict';

  angular.module('dTreeApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'templates/admin.template.html'
      })

      .state('view', {
        url: '/view',
        templateUrl: 'templates/view.template.html'
      });
  }
})();