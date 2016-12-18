(function () {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  // @todo inject UserDataService
  SignupController.$inject = ['validMenuItemsShortNames', 'UserDataService','$scope'];
  function SignupController(validMenuItemsShortNames, UserDataService, $scope) {
    /*  var $ctrl = this;
     $ctrl.userData = UserDataService.getUserData();*/

    var signupCtrl = this;

    signupCtrl.signupSuccessful = false;
    signupCtrl.validMenuItemsShortNames = validMenuItemsShortNames;
    console.log(validMenuItemsShortNames);
    var signup = this;
    $scope.userData = {}
    signupCtrl.submit = function () {
      UserDataService.saveUserData(signupCtrl.user);
      $scope.userData = signupCtrl.user;
      console.log($scope.userData);
      signupCtrl.signupSuccessful = true;
    };
  }

})();
