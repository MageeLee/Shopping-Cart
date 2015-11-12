var app = angular.module('cart',[]);

app.controller('CartController',['$scope',function($scope){
	//$scope.item = "";
	$scope.items = [
		{id:'1',name:'蜂蜜',price:30.00,quantity:1,totalPrice:0},
		{id:'2',name:'黄豆酱',price:15.80,quantity:1,totalPrice:0},
		{id:'3',name:'护手霜',price:15.00,quantity:1,totalPrice:0},
		{id:'4',name:'保温杯',price:29.90,quantity:1,totalPrice:0},
		{id:'5',name:'鼠标',price:39.90,quantity:1,totalPrice:0},
		{id:'6',name:'米老头',price:8.80,quantity:1,totalPrice:0}
	];
	$scope.goods = {
		num:0,
		total:0
	}

	$scope.$watch('items', function() {
		// console.log('ss');
		var items = $scope.items;
		$scope.goods.num = 0;
		for(var i =0;i<items.length;i++){
			$scope.goods.num += items[i].quantity;
			items[i].totalPrice =items[i].quantity*items[i].price;
		}
		$scope.goods.total = getTotal();
	}, true);

	function getTotal() {
                    $scope.goods.total = 0;
                    for (var j = 0; j < $scope.items.length; j++) {
                    	// console.log($scope.items[j]);
                        $scope.goods.total +=  $scope.items[j].totalPrice;
                    }
                    return $scope.goods.total;
                }

    // $scope.getForm = function(){
    // 	console.log($scope.items);
    // }
    $scope.add = function($index){
    	$scope.items[$index].quantity++;
    }

    $scope.sub = function($index){
    	var quantity = $scope.items[$index].quantity;
    	if(quantity ===''||quantity==0){
    		$scope.items[$index].quantity = 0;
    	}else{
    		//alert("dddf");
    		$scope.items[$index].quantity--;
    	}
    }

	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}
}]);