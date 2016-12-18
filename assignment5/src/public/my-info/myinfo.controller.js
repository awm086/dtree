(function () {
  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ["userData", 'favoriteDish'];
  function MyInfoController(userData, favoriteDish) {
    var myInfoCtrl = this;

    myInfoCtrl.userData = userData;
    myInfoCtrl.favDish = favoriteDish;
  }

})();