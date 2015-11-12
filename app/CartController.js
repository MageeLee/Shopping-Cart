var app = angular.module('myApp',[]);

app.controller('CartController',['$scope',function($scope){
	$scope.items = [
		{id:'1',name:'蜂蜜',price:'30.00'},
		{id:'2',name:'黄豆酱',price:'15.80'},
		{id:'3',name:'护手霜',price:'15.00'},
		{id:'4',name:'保温杯',price:'29.90'},
		{id:'5',name:'鼠标',price:'39.90'},
		{id:'6',name:'米老头',price:'8.80'}
	];

	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}
}]);