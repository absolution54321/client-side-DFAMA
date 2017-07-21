var app = angular.module("app");

app.controller("login", function($scope, $location,$http) {

  $scope.data={};
  //console.log(data.user);


  $scope.clicked = function(){
       console.log($scope.data);
    $scope.jsonObject = {
                        "UserId":$scope.data.user,
                        "UserPwd": $scope.data.pwd,
                        "UserType":$scope.data.result
                    };
        
        var url = "http://localhost:3010/";
        var hpromise = $http.post(url, $scope.jsonObject);
        hpromise.then(function(response) {
              console.log(response);
            //routing according to login
              if(response.data.length>0)
              {
                    if($scope.data.result==1){
                         $location.path("/adminHome");
                    }else if($scope.data.result==2){
                         $location.path("/studentHome");
                    }else if($scope.data.result==3){
                         $location.path("/mentorHome");
              }
            }else
            {
              alert("Invalid Credentials");
            }
        }).catch(function(err) {
            console.log(err);
        });

          
 };  
});