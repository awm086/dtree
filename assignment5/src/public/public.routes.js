(function () {
  'use strict';

  angular.module('public')
    .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        absract: true,
        templateUrl: 'src/public/public.html',
      })
      .state('public.home', {
        url: '/',
        templateUrl: 'src/public/home/home.html'
      })
      .state('public.menu', {
        url: '/menu',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuCategories: ['NarrowItDownController', function (MenuService) {
            return MenuService.getCategories();
          }]
        }
      })

      .state('public.signup', {
        url: '/sing-up',
        templateUrl: 'src/public/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'signupCtrl',
        resolve: {
          validMenuItemsShortNames: ['MenuService', function (MenuService) {
            return MenuService.getMenuItems().then(function (data) {
              return data.menu_items.map(function (element) {
                return element.short_name;
              });
            });
          }],
        }
      })

      .state('public.myinfo', {
        url: '/myinfo',
        templateUrl: 'src/public/my-info/my-info.html',
        controller: 'MyInfoController',
        controllerAs: 'myInfoCtrl',
        resolve: {
          userData: ['UserDataService', function (UserDataService) {
            var data = UserDataService.getCurrentUserData();
            console.log('in resolve', data);
            return data;
          }],
          favoriteDish: ['UserDataService', 'MenuService', function (UserDataService, MenuService) {
            var data = UserDataService.getCurrentUserData();
            console.log('inresole 2 ', data);
            if (data.favoriteDish !== undefined && data.favoriteDish !== "") {
              console.log(data.favoriteDish);
              var item = MenuService.getItem(data.favoriteDish);
              console.log(item);
              return item;
            }
            return {};
          }]
        }
      });
  }
})();
