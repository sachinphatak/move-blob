var BlobApp = angular.module("MoveBlobApp", ['cfp.hotkeys']);

BlobApp.config(['hotkeysProvider', function(hotkeysProvider){
	hotkeysProvider.includeCheatSheet = true;
}]);

BlobApp.controller('BlobCtrl', ['$scope', 'hotkeys', function($scope, hotkeys){

	$scope.leftMarginPercentage = 10;
	$scope.topMarginPercentage = 10;

	$scope.refreshBlobPosition = function(){
		$scope.blobStyle = {
			'width': '20%',
			'height': '20%',
			'position': 'absolute',
			'left': $scope.leftMarginPercentage + '%',
			'top': $scope.topMarginPercentage + '%'
		};
	};

	$scope.refreshBlobPosition();

	$scope.moveBlobRight = function(){
		if($scope.leftMarginPercentage !== 100){
			$scope.leftMarginPercentage += 5;
		}
		else {
			$scope.leftMarginPercentage = 0;
		}

		$scope.refreshBlobPosition();
	};

	$scope.moveBlobLeft = function(){
		if($scope.leftMarginPercentage !== 0){
			$scope.leftMarginPercentage -= 5;
		}
		else {
			$scope.leftMarginPercentage = 100;
		}
		$scope.refreshBlobPosition();
	};

	$scope.moveBlobUp = function(){
		if($scope.topMarginPercentage !== 0){
			$scope.topMarginPercentage -= 5;
		}
		else {
			$scope.topMarginPercentage = 100;
		}
		$scope.refreshBlobPosition();
	};

	$scope.moveBlobDown = function(){
		if($scope.topMarginPercentage !== 100){
			$scope.topMarginPercentage += 5;
		}
		else {
			$scope.topMarginPercentage = 0;
		}

		$scope.refreshBlobPosition();
	};

	hotkeys.bindTo($scope)
		.add({
			combo: 'up',
			description: 'Move blob up',
			callback: $scope.moveBlobUp
		})
		.add({
			combo: 'down',
			description: 'Move blob down',
			callback: $scope.moveBlobDown
		})
		.add({
			combo: 'left',
			description: 'Move blob left',
			callback: $scope.moveBlobLeft
		})
		.add({
			combo: 'right',
			description: 'Move blob right',
			callback: $scope.moveBlobRight
		});

}]);