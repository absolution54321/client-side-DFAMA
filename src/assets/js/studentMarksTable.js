var app = angular.module("app");


app.controller("studentMarksTable", function($scope,$location) {
  $scope.goToStudentAgendaPage=function(){
          $location.path("/page2");
    };
    $scope.goTostudentFeedbackForm=function(){
      $location.path("/studentFeedbackForm");
  }
});