(function () {
    'use strict';

    angular.module('Data')
      .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
      .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
      var service = this;

      console.log('MenuDataService');
      service.getAllCategories = function () {
        console.log('MenuDataService');
        return $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json")
        });

      };

      service.getItemsForCategory = function (categoryShortName) {
        console.log('param:', categoryShortName);
        console.log('MenuDataService');
        return $http({
          url: (ApiBasePath + "/menu_items.json"),
          params: {
            category: categoryShortName
          }
        });
      }

    }
  })();