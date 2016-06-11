var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function() {
        $http.get('/contactlist').success(function(response) {

            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function() {

        $http.post('/contactlist', $scope.contact).success(function(response) {
            refresh();

        });
    };


}]);
