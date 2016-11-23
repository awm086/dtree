(function () {
  'use strict';
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchListstr = "";
    $scope.checklunch = function () {
      $scope.lunchListstr  = $scope.lunchListstr.replace(/[\s]/g, '');
      var list = $scope.lunchListstr.split(',').filter(Boolean);
      console.log(list);
      var length = list.length;
      console.log(length);
      if (length == 0) {
       return $scope.lunchMessage = "Please enter a list of items";
      }
      if (length <= 3) {
        return $scope.lunchMessage = 'Enjoy'
      }
      if (length > 3) {
        return $scope.lunchMessage = 'Too much'
      }

    }
  }
})();
