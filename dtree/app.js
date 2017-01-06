(function () {
  'use strict';
  angular.module("dTreeApp", [])
    .controller("TreeController", TreeController)
    .service('TreeData', TreeData);

  function TreeData() {
    var service = this;

    service.data = function () {

      var data = [{
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
                "question": null,
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
      }]

      return data;
    }


  }

  TreeController.$inject = ["$scope","$element", "TreeData"];
  function TreeController($scope, $element, TreeData ) {

    function trasverse(data, func) {
      for (var i in data) {
        func.apply(data[i]);
        if (data[i] !== null && typeof(data[i]) == "object") {
          //going on step down in the object tree!!
          traverse(data[i], func);
        }
      }
    }


    $scope.isLeaf = function(data) {
      return  data.nodes ? true : false;
    };

    $scope.delete = function (data) {
      data.nodes = [];
    };
    $scope.add = function (data) {
      var post = data.nodes.length + 1;
      var newlabel =  data.newlabel ? data.newlabel : 'node' + '-' + post;
      data.nodes.push({label: newlabel, question: "", nodes: []});
      $scope.showVertixForm = !$scope.showVertixForm;
    };

    $scope.tree = [{label: "Root", question: "", nodes: []}];
    console.log($scope.tree);

    $scope.tree2 = TreeData.data();

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

    $scope.showChilderen2 = function(data) {
      data.showChilderen = !data.showChilderen;
    }

    console.log($scope.tree2);
  }



})();