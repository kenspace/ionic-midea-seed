(function () {
    'use strict';
    var Application = function () {
        var service = {
            //初始化程序
            init: function () {
                DEBUG("Service is ok");
            }
        };

        return service;
    };
    Application.$inject = [];
    app.factory('Application', Application);
}());
