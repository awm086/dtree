(function () {
  "use strict";

  angular.module('dTreeApp')
    .component('node', {
      templateUrl: 'templates/node.component.html',
      bindings: {
        data: '=',
        onDelete: '&',
        onUpdate: '&'
      },
      controller: NodeController
    });

  function NodeController() {

    var ctrl = this;

    ctrl.delete = function () {
      ctrl.onDelete({hero: ctrl.hero});
    };

    ctrl.update = function (prop, value) {
      ctrl.data[prop] = value;
    };

    ctrl.isLeaf = function (data) {
      return data.nodes ? true : false;
    };

    ctrl.delete = function (data) {
      data.nodes = [];
      data.question = null;
    };

    ctrl.add = function (data) {
      console.log('in node add');
      // var post = data.nodes.length + 1;
      if (!data.nodes) {
        data.nodes = [];
      }
      var newlabel = data.newlabel ? data.newlabel : "";
      data.nodes.push({label: newlabel, question: "", nodes: []});
      console.log("after node add", data);
      data.showNodeForm = !data.showNodeForm;
    };

    ctrl.addChild = function (data) {
      var newQuestion = data.question ? data.question : null;
      data.showChildForm = !data.showChildForm;
    };

    ctrl.logme = function (data) {
      console.log(data)
    };

    ctrl.viewChild = function (data) {
      this.tree = [data];
    };


    ctrl.showChilderen2 = function (data) {
      console.log(data);
      data.showChilderen = !data.showChilderen;
    };

  }
})();
