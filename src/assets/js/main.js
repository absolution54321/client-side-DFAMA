var app = angular.module("app", ["ngRoute"]);


app.config(function($routeProvider) {

    $routeProvider.otherwise("/");

    $routeProvider.when("/login", {
        "templateUrl": "./src/views/login.html",
        "controller": "login"
    });
    
    $routeProvider.when("/studentHome", {
        "templateUrl": "./src/views/studentHome.html",
        "controller": "studentHome"
    });

    $routeProvider.when("/adminHome", {
        "templateUrl": "./src/views/adminHome.html",
        "controller": "adminHome"
    });

    $routeProvider.when("/mentorHome", {
        "templateUrl": "./src/views/mentorHome.html",
        "controller": "mentorHome"
    });

    $routeProvider.when("/mentorAgenda", {
        "templateUrl": "./src/views/mentorAgenda.html",
        "controller": "mentorAgenda"
    });
    
    $routeProvider.when("/", {
        "templateUrl": "./src/views/page1.html",
        "controller": "page1"
    });

    $routeProvider.when("/teamPerformance", {
        "templateUrl": "./src/views/TeamPerformance.html",
        "controller": "teamPerformance"
    });

    $routeProvider.when("/page2", {
        "templateUrl": "./src/views/page2.html",
        "controller": "page2"
    });

});