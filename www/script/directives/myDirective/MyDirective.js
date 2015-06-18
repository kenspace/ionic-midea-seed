/**
 * Created by ken on 2015/6/10
 *
 * 顶部返回按钮
 */
(function () {
    'use strict';
    var myDirective = function ($window) {
        return {
            restrict : 'EA',
            replace : false,
            transclude : true,
            scope : {
                txt:'=txt'
            },
            controller: ['$scope',function($scope) {
                this.setValue = function setValue(data){
                    $scope.txt = data;
                }
            }],
            controllerAs: 'indexCtrl',
            template : '<div class="w-100p mt-10">'+
                        '<label>表格directive示例</label>'+
                        '<label>txt按钮：<input type="text" ng-model="txt" class="bg-gray" /></label>'+
                        '<div>输入字符：{{txt}}</div>'+
                        '<div ng-click="show()">Directive Txt 的值</div>'+
                        '<div ng-click="showCtrl()">IndexCtrl Txt 的值</div>'+
                        '</div>',
            link : function(scope, element, attrs,indexCtrl) {
                scope.txt = "Directive txt";
                scope.show = function(){
                    DEBUG(scope.txt);
                };
                scope.showCtrl = function(){
                    indexCtrl.setValue("23");
                    scope.$emit('changeTxt',"");
                };
            }
        };
    };
    myDirective.$inject = ['$window'];
    app.directive('myDirective', myDirective);
}());