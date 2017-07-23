var app = angular.module("app");


app.controller("mentorAgenda", function($scope, $window,$compile)
{
    $scope.postsList =[];

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
    };

    $scope.setAgenda = function(){
        // console.log($scope.posts.agendaText);
        // var newEle = angular.element('<div>$scope.posts.agendaText</div>');
        // $compile(newEle)($scope);
        

    };

    $scope.performLogOut = function(){
        $cookies.remove("userId");
        $cookies.remove("mentorUserName");
        $location.path("/");
    };
});