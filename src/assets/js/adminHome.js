var app = angular.module("app");

app.controller("adminHome", function($scope,$location) {

$scope.custom = true;
$scope.custom1 = true;
$scope.toggleMarks = function(){
    $scope.custom = $scope.custom === false ? true : false;
};

$scope.toggleData = function(){
    $scope.custom1 = $scope.custom1 === false ? true : false;
};


 $scope.goToForum=function(){
        $location.path("/mentorDetails");
    };

    $scope.goToMentorDetails=function(){
        $location.path("/mentor");
    };

    
});