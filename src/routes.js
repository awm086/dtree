(function () {
  'use strict';

  angular.module('dTreeApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.template.html',
      })

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
              console.log('getting resolved')
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
          // Injection treeData makes it possible to resolve the parent state treeData if the initial state
          // land on /view. For example, without this injection, if the user goes to '/view' and refresh page
          // treeData won't get resolved. Adding the DI forces angular to resolve it in the parent state ('tree').
          treeData: ['$stateParams', 'TreeData', 'treeData', function ($stateParams, TreeData, treeData) {
            console.log('treeData', treeData)
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