var app = angular.module("app");


app.controller("mentorDetails", function($scope) {

    $scope.custom = true;
$scope.custom1 = true;
$scope.toggleMarks = function(){
    $scope.custom = $scope.custom === false ? true : false;
}

$scope.toggleData1 = function(){
    $scope.custom1 = $scope.custom1 === false ? true : false;
}


 $scope.goToForum=function(){
        $location.path("/student");
    };

    $scope.goToMentorDetails=function(){
        $location.path("/mentor");
    };


});