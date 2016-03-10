
(function(){
    'use strict';

    /**
     * @ngdoc directive
     * @memberOf idsToolkit
     * @name autocomplete
     * @description autocompletion on input form using static datas
     * @example
     * <input type="text" auto-complete  options=["street address","city","state"]  search="searchText"  ng-model="searchText"/>
     */
    angular.module( 'ids.toolkit')
        .directive('autoComplete',['$compile', function($compile) {
            return {
                restrict:'AE',
                scope: {
                    search: '=',
                    options:'='

                },
                link: function(scope, element, attributes) {
                    scope.options = JSON.parse(attributes.options);
                    var done=false;
                    scope.$watch('search',function(newContent){
                        if(newContent){
                            var contentTr = angular.element('<ul style="position:absolute;width:100%;background:#d3d3d3" ><li class="predictive-search-list-item" ng-click="bindThis(item)" ng-hide="open" ng-repeat="item in options | filter:search">{{item}}</li></ul>');
                            element.after(contentTr);
                            $compile(contentTr)(scope);
                        }

                        if(scope.search===''){
                            scope.open=true;
                            done=false;
                        }
                        else{
                            if(!done)
                            {
                                scope.open=false;
                            }
                        }

                    });
                    scope.bindThis=function(item){
                        scope.search=item;
                        scope.open=true;
                        done=true;
                    };
                }
            };
        }]);
}());