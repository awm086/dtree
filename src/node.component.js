(function () {
  "use strict";

  angular.module('dTreeApp')
    .component('node', {
      templateUrl: 'templates/node.component.html',
      bindings: {
        data: '='
      },
      controller: NodeController
    });

  function NodeController() {

      this.isLeaf = function (data) {
          return data.nodes ? true : false;
      };

      this.delete = function (data) {
          data.nodes = [];
          data.question = null;
      };

      this.add = function (data) {
          console.log('in node add');
          // var post = data.nodes.length + 1;
          if (!data.nodes) {
              data.nodes = [];
          }
          var newlabel = data.newlabel ? data.newlabel : ""; // 'node' + '-' + post;
          data.nodes.push({label: newlabel, question: "", nodes: []});
          console.log(data);
          data.showNodeForm = !data.showNodeForm;
      };

      this.addChild = function (data) {
          var newQuestion = data.question ? data.question : null;
          data.showChildForm = !data.showChildForm;
      };

      this.logme = function (data) {
          console.log(data)
      };

      this.viewChild = function (data) {
          this.tree = [data];
      };



      this.update = function (data) {
          console.log('in tree controller update', data);
          console.log(this.tree);

      };

      this.showChilderen2 = function (data) {
          console.log(data);
          data.showChilderen = !data.showChilderen;
      };


  }
})();
