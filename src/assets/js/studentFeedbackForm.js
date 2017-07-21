var app = angular.module("app");


app.controller("studentFeedbackForm", function($scope,$location) {
  $scope.goToStudentAgendaPage=function(){
          $location.path("/page2");
    };

$scope.goToStudentMarksTablePage=function(){
   $location.path("/studentMarksTable");
};
});