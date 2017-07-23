var app = angular.module("app");


app.controller("studentFeedbackForm", function ($scope, $location) {
  $scope.goToStudentAgendaPage = function () {
    $location.path("/studentAgenda");
  };

  $scope.goToStudentMarksTablePage = function () {
    $location.path("/studentMarksTable");
  };
  $scope.performLogOut = function () {
    $cookies.remove("userId");
    $cookies.remove("studentUserName");
    $location.path("/");
  };
});