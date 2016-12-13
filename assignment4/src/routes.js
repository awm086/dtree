(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/main-categories.template.html',
        controller: 'CategoriesController as CategoriesController',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories().then(function (response) {
              console.log(response);
              return response.data;
            });
          }]
        }
      })
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/templates/main-items.template.html',
        controller: 'ItemsController as ctrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (response) {
              console.log($stateParams.categoryShortName);
              console.log(response.data.menu_items);
              return response.data.menu_items;
            });
          }]
        }
      });
  }
})();