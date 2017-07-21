var app = angular.module("app");

app.controller("login", function($scope, $location) {

  $scope.data={};

  //console.log(data.user);


  $scope.clicked = function(){
      //  window.location = "#!/page2.html";
      //$location.path('/page1.html');
        // $location.url('http://localhost/page2.js');
        console.log($scope.data);
       
       // $window.location.href = 'http://localhost:3000/#!/studentHome';


        $location.path("/studentHome");
 };

});