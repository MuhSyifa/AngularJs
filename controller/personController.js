angular.module('myApp', []).controller('personCtrl', function($scope) {
    $scope.firstName = "",
    $scope.lastName = "",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});