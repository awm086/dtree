(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
    .controller('ToBuyShoppingList', ToBuyShoppingList)
    .controller('AlreadyBoughtShoppingList', AlreadyBoughtShoppingList)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingList.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingList(ShoppingListCheckOffService)  {
    this.toBuyList = ShoppingListCheckOffService.getItems();
    this.checkOff = function ($index) {
      ShoppingListCheckOffService.checkOff($index)
    }

  }


  AlreadyBoughtShoppingList.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingList(ShoppingListCheckOffService)  {
    this.bought = ShoppingListCheckOffService.getboughtItems();
  }

  function ShoppingListCheckOffService () {

    var service = this;
    var boughtList = [];
    var list = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "milk",
        quantity: 10
      },

    ];

    service.getItems = function () {
      console.log(list);
      return list;
    }

    service.getboughtItems = function () {
      return boughtList;
    }

    service.checkOff = function (itemIdex) {
      var item = list[itemIdex];
      list.splice(itemIdex, 1);
      boughtList.push(item);
    };

  }
})();