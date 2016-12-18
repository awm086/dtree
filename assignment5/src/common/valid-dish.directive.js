(function () {
  angular.module('common')
    .directive('validDish', function () {
      return {
        restrict: 'A',
        require:'ngModel',
        scope: {
          validNames: "<"
        },
        link: function (scope, elem, attr, ctrl) {
          ctrl.$validators.validDish = function (modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)){
              return true;
            }
            if (scope.validNames.indexOf(viewValue) !== -1){
              return true;
            }
            return false;
          };

        }
      };
    });
})();