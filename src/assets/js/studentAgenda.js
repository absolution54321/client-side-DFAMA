var app = angular.module("app");


app.controller("studentAgenda", function ($scope, $window, $compile, $filter, $http, $cookies, $location) {
    $scope.postList = [];

    $scope.goToStudentAgendaPage = function () {
        $location.path("/studentAgenda");
    };

    $scope.goToStudentMarksTablePage = function () {
        $location.path("/studentMarksTable");
    };

    $scope.goTostudentFeedbackForm = function () {
        $location.path("/studentFeedbackForm");
    };


    $scope.agendaInit = function () {
        $scope.jsonObj = { "studentId": $cookies.get('userId') };

        var url = "http://localhost:3002/student/agendaInit";
        var hpromise = $http.post(url, $scope.jsonObj);

        hpromise.then(function (response) {
            console.log(response);

            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    $scope.postList.push({
                        "agendaText": response.data[i].agenda_Details,
                        "agendaDate": response.data[i].scheduleTime
                    });
                }

            }

        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.performLogOut = function () {
        $cookies.remove("userId");
        $cookies.remove("studentUserName");
        $location.path("/");
    };
});