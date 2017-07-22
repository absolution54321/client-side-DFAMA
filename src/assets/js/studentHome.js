var app = angular.module("app");


app.controller("studentHome", function($scope,$location) {

    $scope.goToStudentAgendaPage=function(){
          $location.path("/page2");
    };

$scope.goToStudentMarksTablePage=function(){
   $location.path("/studentMarksTable");
};
  
  $scope.goTostudentFeedbackForm=function(){
      $location.path("/studentFeedbackForm");
  };

  $scope.performLogOut = function(){
        $cookies.remove("mentorId");
        $cookies.remove("mentorUserName");
        $location.path("/");
    };
});


