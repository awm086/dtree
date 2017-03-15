(function () {
  "use strict";

  angular.module('dTreeApp')
    .component('actionForm', {
      templateUrl: 'templates/action.component.html',
      bindings: {
        data: '='
      },
      controller: actionFormController
    });

  function actionFormController() {
  }
})();
