(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/templates/categories.template.html',
      controllerAs: "mycategoriesctrl",
      bindings: {
        categories: '<'
      }
    });
})();
