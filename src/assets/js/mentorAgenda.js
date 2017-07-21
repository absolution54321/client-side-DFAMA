var app = angular.module("app");


app.controller("mentorAgenda", function($scope, $window)
{

    $scope.fetch = function()
    {
        $window.location.href = "https://www.google.co.in/";
    };

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
    }
});