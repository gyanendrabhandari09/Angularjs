
var app = angular.module('demoApp', []);
//demoCtrl
app.controller('mainCtrl', function($scope,$http) {
    $scope.name1="";
        $scope.users_Data=[];

        //$scope.orderProp = "id";
        $http.get('JSON/MOCK_DATA.json')
             .success(function(resp){
                 $scope.users_Data=resp; //get data from JSON file store it to user_Data
         });
        $scope.submit = function() {
            $scope.$broadcast('submit');
        }
         $scope.clear=function(){
            $scope.name="";
         }

    })
    //cust directive--if the input field is empty then change the border color to red
    .directive('highlightOnError', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                scope.$on('submit', function() {
                    var border = '';
                    if (ngModel.$invalid)
                        border = 'red solid 2px';
                    element.css('border', border);
                });
            }
        };
    });//end-demoCtrl
