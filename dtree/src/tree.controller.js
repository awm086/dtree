(function () {
  'use strict';
  angular.module("dTreeApp")
    .controller("TreeController", TreeController);
  //TreeController.$inject = ["$scope", "$element", "TreeData"];
  TreeController.$inject = ["$scope", "treeData"];
  function TreeController($scope, treeData) {

    function trasverse(data, func) {
      for (var i in data) {
        func.apply(data[i]);
        if (data[i] !== null && typeof(data[i]) == "object") {
          //going on step down in the object tree!!
          traverse(data[i], func);
        }
      }
    }


    $scope.isLeaf = function (data) {
      return data.nodes ? true : false;
    };

    $scope.delete = function (data) {
      data.nodes = [];
      data.question = null;
    };

    $scope.add = function (data) {
      // var post = data.nodes.length + 1;
      if (!data.nodes) {
        data.nodes = [];
      }
      var newlabel = data.newlabel ? data.newlabel : ""; // 'node' + '-' + post;
      data.nodes.push({label: newlabel, question: "", nodes: []});
      console.log(data);
      data.showNodeForm = !data.showNodeForm;
    };

    $scope.addChild = function (data) {
      //data.nodes = [];
      var newQuestion = data.question ? data.question : null;
      //data.nodes.push({label: "", question: newQuestion, nodes: []});
      data.showChildForm = !data.showChildForm;
      console.log($scope.showChildForm);
      console.log($scope.tree2);
    };

    $scope.logme = function (data) {
      console.log(data)

    };

    $scope.viewChild = function (data) {
      $scope.tree = [data];
      console.log($scope.tree)
      console.log(data)
    };

    //$scope.tree = [{label: "Root", question: "", nodes: []}];

    $scope.tree = treeData;
    console.log($scope.tree)

    /*$scope.tree = TreeData.getTreeData().then(function (response) {
      console.log(response);
      return response.data;
    }, function (error) {
      console.log('opsssss' + error);
    });*/


    /*
     $scope.showChilderen = function(key) {
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

    $scope.showChilderen2 = function (data) {
      data.showChilderen = !data.showChilderen;
    };

  }


})();