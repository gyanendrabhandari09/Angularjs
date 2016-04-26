var app=angular.module('TestMe', ['ui.router']);
//homectrl
app.controller('homectrl',function($scope,$state,item){
    $scope.selected = [];

    $scope.list = [{
        "id": 0,
        "value":"Abstract",
        "checked": false
    },{
        "id": 1,
        "value":"Publication",
        "checked": false
    },{
        "id": 2,
        "value":"Inventor",
        "checked": false
    },{
        "id": 3,
        "value":"Language",
        "checked": false
    },{
        "id": 4,
        "value":"Source",
        "checked": false
    },{
        "id": 5,
        "value":"Priority",
        "checked": false
    }];
    $scope.checkedAll=function(check){
        console.log(check)
        if(
            ($scope.check)==true){
            for(var i=0;i<=$scope.list.length-1;i++){
                //$scope.selected.push($scope.list[i].value)
                item.c.push($scope.list[i].value)
            }
        }
        else{
            $scope.selected=[];
        }
        console.log($scope.selected)
    }

    $scope.checkedOrNot = function (id, isChecked, index) {
        console.log("index:" + index + " " + isChecked);

        if (isChecked) {
            $scope.selected.push(index);

        } else {
            var index = $scope.selected.indexOf(index);
            $scope.selected.splice(index,1);
        }

    };
    //$scope.select=[];
    //$scope.select.push($scope.selected.push(id))
    item.c=$scope.selected;
    $scope.submit=function(){
        if(item.c==""){
            $state.go('');
        }
        else if(item.c=="Language"){
            alert("Error");
        }
        else{
            $state.go('results')
        }
        //$state.go('results')
    }
   //$scope.checkedAll=item.checkedAll();
});//end-homectrl
//resultsctrl
app.controller('resultsctrl',function($scope,$state,item){

    $scope.x=item.c;
});//endresultsctrl
//service name "item"
app.service('item',function(){
    this.c='';
})
app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider
        .otherwise('home');
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'home.html',
            controller:'homectrl'
        })
    $stateProvider
        .state('results',{
            url:'/results',
            templateUrl:'results.html',
            controller:'resultsctrl'
        })
});