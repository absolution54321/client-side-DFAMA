var app = angular.module("app");


app.controller("mentorHome", function($scope, $window)
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
    }
    

});