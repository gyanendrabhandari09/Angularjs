/**
 A bootstrap ready directive that appends a hidden form to the element
 * Configure the directive with the value that you wish to edit
 */

angular.module('myApp')
    .directive('editableOneText', function ($timeout) {
        return {
            restrict: 'AE',
            replace:true,
            transclude: true,
            scope: {editable: '='},
            templateUrl: 'Cust_directive.html',
            link: function (scope, ele) {
                scope.tempVal = scope.editable;
                // save the changes to the parent scope value
                scope.saveEdit = function() {
                    scope.editable = scope.tempVal;
                    scope.hideForm();
                };
                scope.showForm = function() {
                    ele.find('form').removeClass('sr-only');
                    ele.find('div').eq(0).addClass('sr-only');
                    $timeout(function() {
                        ele.find('input')[0].select();
                    });
                };
                scope.hideForm = function() {
                    ele.find('form').addClass('sr-only');
                    ele.find('div').eq(0).removeClass('sr-only');
                };
            }
        };
    });