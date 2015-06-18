var CORDOVAUSER = "";

var CORDOVAPHONE = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        CORDOVAPHONE.hideNav();
        CORDOVAPHONE.hideBackButton();
        CORDOVAPHONE.getUser();
        CORDOVAPHONE.initCamera();
    },

    hideNav: function () {
        cordova.exec(function (success) {
        }, function (error) {
        }, "MideaCommon", "hideNav", []);
    },
    getUser: function () {
        cordova.exec(function (success) {
            CORDOVAUSER = success.uid;
            DEBUG(CORDOVAUSER, 'Cordova Get UserInfo success');
        }, function (error) {
            DEBUG(error, 'Cordova Get UserInfo error');
        }, "MideaUser", "getUser", []);
    },
    hideBackButton: function () {
        cordova.exec(function (success) {
            DEBUG(CORDOVAUSER, 'Cordova hideBackButton success');
        }, function (error) {
            DEBUG(CORDOVAUSER, 'Cordova hideBackButton error');
        }, "MideaCommon", "hideFloat", []);
    },
    callUp: function (phone) {
        cordova.exec(function (success) {
        }, function (error) {
        }, "MideaCommon", "callPhone", [phone]);
    },
    exit: function () {
        cordova.exec(function (success) {
        }, function (error) {
        }, "MideaCommon", "exit", []);
    }

};
CORDOVAPHONE.initialize();
