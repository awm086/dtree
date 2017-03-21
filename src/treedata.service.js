(function () {
  'use strict';
  angular.module("dTreeApp")
    .constant('ApiBasePath', ' http://localhost:3000')
    .service('TreeData', TreeData);


  TreeData.$inject = ['$http', "ApiBasePath"];
  function TreeData($http, ApiBasePath) {

    var service = this;

    service.treeData = [{
      "root": true,
      "label": null,
      "question": "What product category?",
      "nodes": [
        {
          "label": "Clothes",
          "question": "What type of clothing?",
          "nodes": [
            {
              "label": "Jeans",
              "question": "Color of jeans?",
              "nodes": [
                {
                  "label": "Blue",
                  "question": null,
                  "nodes": null
                },
                {
                  "label": "Black",
                  "question": null,
                  "nodes": null
                },
                {
                  "label": "White",
                  "question": null,
                  "nodes": null
                }
              ]
            },
            {
              "label": "Shirt",
              "question": "Type of shirt?",
              "nodes": [
                {
                  "label": "T-Shirt",
                  "question": "Color of T-shirt?",
                  "nodes": [
                    {
                      "label": "Red",
                      "question": null,
                      "nodes": null
                    },
                    {
                      "label": "Green",
                      "question": null,
                      "nodes": null
                    },
                    {
                      "label": "Black",
                      "question": "Logo?",
                      "nodes": [
                        {
                          "label": "Rock band",
                          "question": null,
                          "nodes": null
                        },
                        {
                          "label": "TV show",
                          "question": null,
                          "nodes": null
                        },
                        {
                          "label": "No logo",
                          "question": null,
                          "nodes": null
                        }
                      ]
                    },
                    {
                      "label": "Orange",
                      "question": null,
                      "nodes": null
                    }
                  ]
                },
                {
                  "label": "Hoodie",
                  "question": "Color of hoodie?",
                  "nodes": [
                    {
                      "label": "Gray",
                      "question": null,
                      "nodes": null
                    },
                    {
                      "label": "Blue",
                      "question": null,
                      "nodes": [
                        {
                          "label": "TV show",
                          "question": null,
                          "nodes": null
                        },
                        {
                          "label": "No logo",
                          "question": null,
                          "nodes": null
                        }
                      ]
                    },
                    {
                      "label": "Green",
                      "question": null,
                      "nodes": null
                    },
                    {
                      "label": "Pink",
                      "question": null,
                      "nodes": null
                    },
                    {
                      "label": "Brown",
                      "question": null,
                      "nodes": null
                    },
                    {
                      "label": "Black",
                      "question": null,
                      "nodes": null
                    },
                    {
                      "label": "Red",
                      "question": null,
                      "nodes": null
                    }
                  ]
                },
                {
                  "label": "White",
                  "question": null,
                  "nodes": null
                }
              ]
            },
            {
              "label": "Hat",
              "question": "Type of hat?",
              "nodes": [
                {
                  "label": "Stetson",
                  "question": null,
                  "nodes": null
                },
                {
                  "label": "Sombrero",
                  "question": null,
                  "nodes": null
                }
              ]
            }
          ]
        },
        {
          "label": "Food",
          "question": "Type of food?",
          "nodes": [
            {
              "label": "Ramen noodles",
              "question": null,
              "nodes": null
            },
            {
              "label": "Soda pop",
              "question": "What kind",
              "nodes": [
                {
                  "label": "Cola",
                  "question": null,
                  "nodes": null
                },
                {
                  "label": "Lemon",
                  "question": null,
                  "nodes": null
                },
                {
                  "label": "Orange",
                  "question": null,
                  "nodes": null
                },
                {
                  "label": "Apple",
                  "question": null,
                  "nodes": null
                }
              ]
            },
            {
              "label": "Bananas",
              "question": null,
              "nodes": null
            }
          ]
        }
      ]
    }];

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
      var data = service.treeData;
      var pathArr = path.split(':')
      var subTreeData = subTree(data, pathArr);
      subTreeData.path = path;
      if (subTreeData.nodes == null) {
        subTreeData = data;
        return null;
      }
      data = [subTreeData];

      console.log(data);
      //console.log(subTreeData);
      return data;
    }

  }

})() ;