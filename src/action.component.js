(function () {
  "use strict";

  angular.module('dTreeApp')
    .component('actionForm', {
      templateUrl: 'templates/action.component.html',
      bindings: {
        data: '=',
       // onUpdate: '&'
      },
      controller: ActionFormController
    });

  function ActionFormController() {
    var ctrl = this;
    this.logme = function (somedata) {
      console.log(somedata);
      //console.log(ctrl.data);
      //ctrl.onUpdate(ctrl.data);
    }

    this.addAction = function (action) {
      
    }
  }
})();
