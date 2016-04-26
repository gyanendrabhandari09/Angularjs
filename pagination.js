angular.module('myApp', ['ui.bootstrap']);
var PaginationDemoCtrl = function ($scope,$http) {
    $http.get('package.json')
        .success(function(resp){
        $scope.data=resp;

    });
    $scope.viewby = 8;
    $scope.totalItems = $scope.data.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 3; //Number of pager buttons to show

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    }
};
