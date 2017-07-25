var app = angular.module("app");


app.controller("forum", function ($scope, $window, $compile, $filter, $http, $cookies, $location) {

    $scope.goToHomePage = function () {
        var type = $cookies.getObject('type');
        if(type==1)
            $location.path("/adminHome");
        if(type==2)
            $location.path("/studentHome");
        if(type==3)
            $location.path("/mentorHome");
    };



}); 