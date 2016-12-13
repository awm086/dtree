(function () {
  angular.module('MenuApp')
    .controller('ItemsController', ItemsController)

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    this.items = items;
  }
})();