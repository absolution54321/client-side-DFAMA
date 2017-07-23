var app = angular.module("app");


app.controller("studentFeedbackForm", function ($scope, $location, $http, $cookies) {
  $scope.goToStudentAgendaPage = function () {
    $location.path("/page2");
  };

  $scope.goToStudentMarksTablePage = function () {
    $location.path("/studentMarksTable");
  };

  $scope.performLogOut = function () {
    $cookies.remove("userId");
    $cookies.remove("studentUserName");
    $location.path("/");
  };

  $scope.submitFeedback = function () {

    $scope.feedbackData = {};
    $scope.feedbackData.push({
      "sid": "feedbackData.studentId",
      "mid": "201",
      "one": "feedbackData.1",
      "two": "feedbackData.2",
      "three": "feedbackData.3",
      "four": "feedbackData.4",
      "five": "feedbackData.5",
      "six": "feedbackData.6",
      "review": "feedbackData.comment"
    });

    var url = "http://localhost:3002/studentFeedback";
    var hpromise = $http.post(url, $scope.feedbackData);

    hpromise.then(function (response) {
      console.log(response);

    }).catch(function (err) {
      console.log(err);
    });
  }
});
