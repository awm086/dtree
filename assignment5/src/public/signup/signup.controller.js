(function () {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  // @todo inject UserDataService
  SignupController.$inject = ['validMenuItemsShortNames'];
  function SignupController(validMenuItemsShortNames) {
    /*  var $ctrl = this;
     $ctrl.userData = UserDataService.getUserData();*/

    var signupCtrl = this;

    signupCtrl.signupSuccessful = false;
    signupCtrl.validMenuItemsShortNames = validMenuItemsShortNames;
    console.log(validMenuItemsShortNames);
    var signup = this;

    signup.submit = function () {
      signup.completed = true;
    };
  }

})();
