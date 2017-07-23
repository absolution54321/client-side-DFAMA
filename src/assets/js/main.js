var app = angular.module("app", ["ngRoute", "ngCookies"]); // ngCookies Dependency


app.config(function($routeProvider) {

    $routeProvider.otherwise("/");

    $routeProvider.when("/", {
        "templateUrl": "./src/views/login.html",
        "controller": "login"
    });
    
   
    //MENTOR RELATED ROUTES
    $routeProvider.when("/mentorHome", {
        "templateUrl": "./src/views/mentorHome.html",
        "controller": "mentorHome"
    });

    $routeProvider.when("/mentorAgenda", {
        "templateUrl": "./src/views/mentorAgenda.html",
        "controller": "mentorAgenda"
    });

    $routeProvider.when("/teamPerformance", {
        "templateUrl": "./src/views/TeamPerformance.html",
        "controller": "teamPerformance"
    });


    // Student Related Routes
     $routeProvider.when("/studentHome", {
        "templateUrl": "./src/views/studentHome.html",
        "controller": "studentHome"
    });

    $routeProvider.when("/studentMarksTable", {
        "templateUrl": "./src/views/studentMarksTable.html",
        "controller": "studentMarksTable"
    });

     $routeProvider.when("/studentFeedbackForm", {
        "templateUrl": "./src/views/studentFeedbackForm.html",
        "controller": "studentFeedbackForm"
    });

    //ADMIN RELATED ROUTES 
    $routeProvider.when("/adminHome", {
        "templateUrl": "./src/views/adminHome.html",
        "controller": "adminHome"
    });

      $routeProvider.when("/mentorDetails", {
        "templateUrl": "./src/views/mentorDetails.html",
        "controller": "mentorDetails"
    });

     $routeProvider.when("/adminDisplaySpecificMarks", {
        "templateUrl": "./src/views/adminDisplaySpecificMarks.html",
        "controller": "adminDisplaySpecificMarks"
    });


    //DEMO PURPOSE
     $routeProvider.when("/studentHome", {
        "templateUrl": "./src/views/studentHome.html",
        "controller": "studentHome"
    });

    //ABOUT US
     $routeProvider.when("/aboutUs", {
        "templateUrl": "./src/views/aboutUs.html",
        "controller": "aboutUs"
    });


});

app.run(function($location, $rootScope, $cookies, $http)
{
    $rootScope.$on("$locationChangeStart", function(event, next, current)
    {
        console.log(new Date());
        var userId = $cookies.getObject('userId');

        if(userId == undefined)
            {
                $location.path("/");
            }
    });
});