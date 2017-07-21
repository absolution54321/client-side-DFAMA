var app = angular.module("app");


app.controller("adminHome", function($scope)
{
     $scope.data = { "title": "team6",
                    "view1": true,
                     "view1Button": "FIRST BUTTON",
                      "view2Button": "SECOND BUTTON" 
                    };
    $scope.dataN = 10;

    $scope.go = function ( path ) 
    {
        $location.path( path );
    };
});

