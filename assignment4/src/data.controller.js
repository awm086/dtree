/**
 * Created by ali on 12/12/16.
 */
(function () {
  'use strict';

  angular.module('Data')
    .controller('Data', Data);

  Data.$inject = ['MenuDataService'];
  function Data(MenuDataService) {
    var data = this;
    console.log(data);
  }
})();

