(function () {
  'use strict';

  angular.module('common')
    .service('UserDataService', UserDataService);

  UserDataService.$inject = ['$q'];
  function UserDataService($q) {
    var service = this;
    this.userData = {};

    service.getCurrentUserData = function () {
      return this.userData;
    };

    service.saveUserData = function (userData) {
      console.log('saving data');
      this.userData = userData;
    };
  }
})();