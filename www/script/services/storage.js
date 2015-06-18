(function () {
    'use strict';
    var Storage = function (localStorageService) {
        //API--> https://github.com/grevory/angular-local-storage
        var Storage = {
            init: function () {
                DEBUG("Storage is ok");
            },
            setStorage: function (key, data) {
                localStorageService.set(key, data);
            },
            getStorage: function (key) {
                return localStorageService.get(key);
            },
            removeStorage: function (key) {
                return localStorageService.remove(key);
            },
            clearStorage: function () {
                return localStorageService.clearAll();
            },
            getLocalStorageItem: function (key, data) {
                var result = (localStorageService.get(key, data)) || "";
                if (result !== "") {
                    return JSON.parse(result);
                } else {
                    return null;
                }
            }
        };
        return Storage;
    };
    Storage.$inject = ['localStorageService'];
    app.factory('Storage', Storage);
}());
