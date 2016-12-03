(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
    .directive('foundItems', foundItems)
    .filter('filterData', filterData);


  function filterData() {
      return function (items, searchText) {
        var filtered = [];
        searchText = searchText.trim();
        if (searchText.length == 0) {
          return filtered;
        }
        searchText = searchText.toLowerCase();

        angular.forEach(items, function (item) {
          if (item.name.toLowerCase().indexOf(searchText) >= 0) {
            filtered.push(item);
          }
        });
        return filtered;
      }
  }


  function foundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'menu',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService, $filter) {
    var menu = this;
    var service = MenuSearchService;
    menu.searchTerm = "";
    menu.items = "";
    menu.getMenuItems  = function () {
      return service.getMatchedMenuItems(menu.searchTerm)
        .then(function (items) {
          menu.items = items;
        })
    };




    menu.removeItem = function (itemIndex) {
      console.log("'this' is: ", this);
      console.log("index: ", itemIndex);
       menu.items.splice(itemIndex,1);
    };

  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath', '$filter'];
  function MenuSearchService($http, ApiBasePath, $filter) {
    var service = this;


    this.getMatchedMenuItems = function (searchTerm) {

      console.log(searchTerm);
      var promise = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })

      .then(function successCallback(result) {
        var foundItems = "";
        // this callback will be called asynchronously
        // when the response is available
        foundItems = $filter('filterData')(result.data.menu_items,searchTerm);
        return foundItems;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('something wrong in http');
      });

      return promise;

    };


  }

})();
