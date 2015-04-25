var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){

	$scope.friends = ['Nikki', 'Tristan', 'Alyssa', 'Eve'];

	$scope.addFriend = function(name) {
		$scope.friends.push(name);
	};
});