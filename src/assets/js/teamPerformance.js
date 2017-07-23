var app = angular.module("app");

app.controller("teamPerformance", function($scope, $window)
{
    $scope.goHome = function()
    {
        $window.location.href = "http://localhost:3000/#!/mentorHome";
    };

    $scope.go = function()
    {
        $window.location.href = "http://localhost:3000/#!/mentorAgenda";
    };

    $scope.goTeam = function()
    {
        $window.location.href = "http://localhost:3000/#!/teamPerformance";
    };

    $scope.performLogOut = function(){
        $cookies.remove("userId");
        $cookies.remove("mentorUserName");
        $location.path("/");
    };

});