'use strict';

/**
 * @ngdoc directive
 * @name ngDemoApp.directive:sample
 * @description
 * # sample
 */
angular.module('ngDemoApp')
  .directive('srCircle', function () {
    return {
      template: '<div class="surveyCircle" style="background-color:{{color}}"></div>',
      restrict: 'E',
      scope:{
      	color:'@col'
      }
    };
  });

angular.module('ngDemoApp')
  .directive('srPanel', function () {
    return {
      template: '<sr-circle ng-click="changeReview(0)" col="{{g}}"></sr-circle><sr-circle ng-click="changeReview(1)" col="{{r}}"></sr-circle><sr-circle ng-click="changeReview(2)" col="{{n}}"></sr-circle>',
      restrict: 'E',
      controller:function($scope){
      	$scope.g = '';
      	$scope.r = '';
      	$scope.n = '';

      	$scope.$watch('ans',function(val){
      		$scope.g = '';
      		$scope.r = '';
      		$scope.n = '';

      		switch (val) {
      		      		case 'Y':
      		      			$scope.g = 'green';
      		      			break;
      		      		case 'N':
      		      			$scope.r = 'red';
      		      			break;
      		      		default:
      		      			$scope.n = 'gray';
      		      			break;
      		      	}      
      		});
      	$scope.changeReview = function(c){
      		console.log('change Review clicked',c);
      		switch (c) {
      			case 0:
      				$scope.ans = 'Y';
      				break;
      			case 1:
      				$scope.ans = 'N';
      				break;
      			default:
      				$scope.ans = 'NA';
      				break;
      		}
      	};
      },
      scope:{
      	ans:'='
      }
    };
  });
angular.module('ngDemoApp')
  .directive('error', function () {
    return {
      template: '<span style="color:red"><i ng-transclude></i><button>X</button></span>',
      restrict: 'EA',
      transclude:true,
      replace:true,
      link:function(scope,elem){
      	elem.find('button').on('click',function(){
      		elem.remove();
      	});
      }
    };
  });