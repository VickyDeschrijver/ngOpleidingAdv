oplApp.controller('StudentController',['$scope', '$http', function($scope, $http) {
    $http({method: 'GET', url: 'js/fruts.json'}).success(function(data) {
        $scope.students = data;
    });
}])