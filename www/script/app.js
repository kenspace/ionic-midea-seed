var app = angular.module('midea', ['ionic', 'LocalStorageModule']);

app.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', 'localStorageServiceProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, localStorageServiceProvider) {
    'use strict';

    $ionicConfigProvider.tabs.position("bottom");
    $ionicConfigProvider.tabs.style("standard");
    localStorageServiceProvider.setPrefix('midea');

    $stateProvider

        /*
        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "tabs.html"
        })

        .state('tab.index', {
            url: '/index',
            views: {
                'tab-index': {
                    templateUrl: 'script/modules/index/index.html',
                    controller: 'IndexCtrl'
                }
            }
        })
        */

        .state('index', {
            url: '/index',
            templateUrl: 'script/modules/index/index.html',
            controller: 'IndexCtrl'
        })

        .state('page', {
            url: '/page',
            templateUrl: 'script/modules/page/page.html',
            controller: 'PageCtrl'
        })
    ;
    $urlRouterProvider.otherwise('/index');

}]);


