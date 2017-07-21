var app = angular.module("app");

app.controller("login", function($scope, $location) {

  $scope.data={};
  //console.log(data.user);


  $scope.clicked = function(){
       console.log($scope.data);

       //routing according to login
       if($scope.data.result==1){
                $location.path("/adminHome");
       }else if($scope.data.result==2){
                $location.path("/studentHome");
       }else if($scope.data.result==3){
                 $location.path("/mentorHome");
       }
 };

});