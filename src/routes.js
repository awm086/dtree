(function () {
  'use strict';

  angular.module('dTreeApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view');

    $stateProvider
      .state('tree', {
        abstract: true,
        controller: 'TreeController as treeCtrl',
        url: '',
        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>',
        resolve: {
          treeData: ['TreeData', function (TreeData) {
            return TreeData.getTreeData().then(function (res) {
              TreeData.treeData = res.data;
              return TreeData.treeData;
            });
          }]
        }
      })

      .state('tree.admin', {
        url: '/admin',
        templateUrl: 'templates/admin.template.html',
      })
      
      .state('tree.view', {
        url: '/view/:path',
        templateUrl: 'templates/view.template.html',
        controller: 'TreeController as treeCtrl',
        resolve: {
          path: ['$stateParams', 'treeData', function ($stateParams, treeData) {
            treeData = null;
            console.log($stateParams);
          }],
          treeData: ['$stateParams', 'TreeData', function ($stateParams, TreeData) {
            var subtree = TreeData.getTreeNode($stateParams.path);
            console.log("subtree", subtree)
            return subtree;
            //return null;
          }]
        },
        params: {
          path: {squash: true, value: '0'},
        }
      });
  }
})();