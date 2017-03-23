(function () {
  'use strict';
  angular.module("dTreeApp")
    .controller("TreeController", TreeController);
  TreeController.$inject = ["treeData"];
  function TreeController(treeData) {

    this.treeData = treeData;

    function trasverse(data, func) {
      for (var i in data) {
        func.apply(data[i]);
        if (data[i] !== null && typeof(data[i]) == "object") {
          //going on step down in the object tree!!
          traverse(data[i], func);
        }
      }
    }


    this.isLeaf = function (data) {
      return data.nodes ? true : false;
    };

    this.delete = function (data) {
      data.nodes = [];
      data.question = null;
    };

    this.add = function (data) {
      console.log('in add');
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
      //data.nodes = [];
      var newQuestion = data.question ? data.question : null;
      //data.nodes.push({label: "", question: newQuestion, nodes: []});
      data.showChildForm = !data.showChildForm;
    };

    this.logme = function (data) {
      console.log(data)
    };

    this.viewChild = function (data) {
      this.tree = [data];
    };



    this.update = function (p, v) {
      console.log('in tree controller update' );
      console.log(p,v);

    };

    /*this.tree = TreeData.getTreeData().then(function (response) {
      console.log(response);
      return response.data;
    }, function (error) {
      console.log('opsssss' + error);
    });*/


    /*
     this.showChilderen = function(key) {
     //console.log(key);
     //var elementResult = document.getElementById(key);
     //console.log(elementResult);

     //var childElem = $element.find(key);
     //elementResult.removeAttribute("class");
     // console.log(childElem);
     var selector = 'div#' + key.replace(':', "\\:");
     console.log(selector);
     var myElement = $element.find("div#object\\:7");
     var myElement2 = $element.find(selector);
     console.log(myElement2);
     myElement2.removeClass('hidden');
     }
     */

    this.showChilderen2 = function (data) {
      console.log(data);
      data.showChilderen = !data.showChilderen;
    };

  }


})();