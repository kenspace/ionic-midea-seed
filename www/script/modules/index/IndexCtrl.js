(function () {
    'use strict';
    var IndexCtrl = function ($scope) {
        DEBUG('IndexCtrl');
        $scope.txt='IndexCtrl txt';
        $scope.$on('changeTxt',function(){
            DEBUG($scope.txt);
        });

    };
    IndexCtrl.$inject = ['$scope'];
    app.controller('IndexCtrl', IndexCtrl);
}());