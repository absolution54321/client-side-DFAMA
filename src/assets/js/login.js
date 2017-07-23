var app = angular.module("app");

app.controller("login", function($scope, $location, $http, $cookies) {

  $scope.data={};
  //console.log(data.user);

  $scope.clicked = function()
  {
    console.log($scope.data);
    $scope.jsonObject = {
                          "UserId":$scope.data.user,
                          "UserPwd": $scope.data.pwd,
                          "UserType":$scope.data.result
                         };
        
        var url = "http://localhost:3002/";
        var hpromise = $http.post(url, $scope.jsonObject);
        
        hpromise.then(function(response) 
        {
            //console.log(response.data[0].mentorId);
            //routing according to login
              if(response.data.length>0)
              {
                  if($scope.data.result==1)
                  {
                    $location.path("/adminHome");
                  }
                  else if($scope.data.result==2)
                  {
                    $location.path("/studentHome");
                    
                    $cookies.put('userId', response.data[0].studentId);
                    $cookies.put('studentUserName', response.data[0].studentUsername);

                  }
                  else if($scope.data.result==3)
                  {
                    $location.path("/mentorHome");
                    
                    $cookies.put('userId', response.data[0].mentorId);
                    $cookies.put('mentorUserName', response.data[0].mentorUsername);
                  }
              }
              else
              {
                alert("Invalid Credentials");
              }
        }).catch(function(err) 
            {
              console.log(err);
            });        
 };  

});