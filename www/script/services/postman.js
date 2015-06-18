(function () {
    'use strict';
    var action = "/mobileterminalaction.do";
    var Postman = function ($http, $q) {
        var Postman = {
            /**
             * HTTP Get 请求数据
             *
             * @param param
             * @returns {*}
             */
            httpGet: function (param) {
                var deferred = $q.defer();
                $http.get(SYSTEMCONFIG.basicURL + action, {params: param})
                    .success(function (data) {
                        DEBUG(data, param.method + " Success");
                        deferred.resolve(data);
                    })
                    .error(function (data) {
                        DEBUG(data, param.method + " Error");
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };
        return Postman;
    };
    Postman.$inject = ['$http', '$q'];
    app.factory('Postman', Postman);
}());
