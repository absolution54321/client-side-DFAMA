var app = angular.module("app");


app.controller("mentorDetails", function($scope,$http,$location,$cookies) {

$scope.custom = true;
$scope.custom1 = true;

var mentorDetailsList = [];
$scope.mentorDetailsList = mentorDetailsList;


$scope.toggleMarks = function(){
    $scope.custom = $scope.custom === false ? true : false;
}

$scope.toggleData1 = function(){
    $scope.custom1 = $scope.custom1 === false ? true : false;
}


$scope.goToForum=function(){
        $location.path("/student");
};

$scope.goToMentorDetails=function(){
        $location.path("/mentorDetails");
};

$scope.loadAllMentorsDetailsForAdminLogin = function(){
        var url = "http://localhost:3010/admin/mdetails/";
        var hpromise = $http.get(url);
        hpromise.then(function(response) {
            console.log(response.data);

            $scope.mentorDetailsList = response.data;

        }).catch(function(err) {
            console.log(err);
        });

};

  $scope.listItemClicked =function(event){
        var id = event.target.id;
        console.log(id); 
        $cookies.put('listItemClicked',id);
                $location.path("/adminDisplaySpecificMarks");

    };
  $scope.go = function(){
        $location.path("/adminHome");
    };

     $scope.performLogOut = function(){
        $cookies.remove("userId");
        $cookies.remove("mentorUserName");
        $location.path("/");
    };

});