(function () {
    'use strict';
    var MainCtrl = function ($rootScope, $state, Application) {

        //屏幕参数
        $rootScope.screenWidth = document.documentElement.clientWidth;
        $rootScope.screenHeight = document.documentElement.clientHeight;

        //跳转函数
        $rootScope.goURL = function (url, paramates) {
            $state.go(url + '', paramates);
        };

        Application.init();

    };
    MainCtrl.$inject = ['$rootScope', '$state', 'Application'];
    app.controller('MainCtrl', MainCtrl);
}());