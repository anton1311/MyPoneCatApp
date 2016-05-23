var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
	$scope.phones = Phone.query();
	$scope.orderProp = 'age';
}]);


phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		$scope.mainImageUrl = phone.images[0];
		$scope.mainImageNum = 0;
		$scope.mainImageLen = phone.images.length - 1;
	});

	$scope.setImage = function(imageUrl,imgNum) {
		$scope.mainImageUrl = imageUrl;
		$scope.mainImageNum = imgNum;
	}
	$scope.nextImage = function() {
		if ($scope.mainImageNum < $scope.mainImageLen){
			$scope.mainImageNum += 1;
			$scope.mainImageUrl = $scope.phone.images[$scope.mainImageNum]
		}else if ($scope.mainImageNum == $scope.mainImageLen){
			$scope.mainImageNum = 0;
			$scope.mainImageUrl = $scope.phone.images[$scope.mainImageNum]
		}
	}
	$scope.previewImage = function() {
		if ($scope.mainImageNum > 0){
			$scope.mainImageNum -= 1;
			$scope.mainImageUrl = $scope.phone.images[$scope.mainImageNum]
		}else if ($scope.mainImageNum == 0){
			$scope.mainImageNum = $scope.mainImageLen;
			$scope.mainImageUrl = $scope.phone.images[$scope.mainImageNum]
		}
	}
}]);