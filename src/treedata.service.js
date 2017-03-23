(function () {
  'use strict';
  angular.module("dTreeApp")
    .constant('ApiBasePath', ' http://localhost:3000')
    .service('TreeData', TreeData);


  TreeData.$inject = ['$http', "ApiBasePath"];
  function TreeData($http, ApiBasePath) {

    var service = this;

    service.treeData = []

    service.data = function () {
      return treeData;
    };

    // todo this may take an id.
    service.getTreeData = function () {
      return $http({
        Method: 'GET',
        url: (ApiBasePath + "/tree.json")
      });
    };

    // Give a node path return the subtree.
    var subTree = function subTreeRec(data, indexes) {
      var sub = data[indexes[0]];
      return indexes.length > 1 ? subTree(sub.nodes, indexes.slice(1)) : sub;
    };

    // todo this may take an id.
    service.getTreeNode = function (path) {
      console.log(service.treeData)
      var subTreeData = subTree(service.treeData, path.split(':'));
      subTreeData.path = path;
      if (subTreeData.nodes == null) {
        return null;
      }
      return [subTreeData];
    }
  }

})() ;