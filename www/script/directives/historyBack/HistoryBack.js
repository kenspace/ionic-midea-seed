/**
 * Created by ken on 2015/6/12
 *
 * 顶部返回按钮
 */
(function () {
    'use strict';
    var historyBack = function ($window) {
        return {
            restrict : 'EA',
            replace : false,
            transclude : true,
            scope : true,
            template : '<ion-item ng-click="goBack()" class="nav-bar-button"><i class="ion-chevron-left color-white"></i></ion-item>',
            link : function(scope) {
                scope.goBack = function(){
                    $window.history.back();
                };
            }
        };
    };
    historyBack.$inject = ['$window'];
    app.directive('historyBack', historyBack);
}());