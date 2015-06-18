/**
 * Created by cyber05 on 15/06/2015.
 */
'use strict';

angular.module('oplApp.students', [])

    .controller('StudentController',['$scope', '$http', 'studentService', function($scope, $http, studentService) {
        $scope.subtitel = "Student Lijst";
        $http.get('http://localhost:8080/api/students').success(function(data) {
            $scope.students = data;
            //console.log('scope: ' + data)
        })
   /* $http({method: 'GET', url: 'js/fruts.json'}).success(function(data) {
        $scope.students = data;
        console.info('scope' + $scope.students);
    });*/

        $scope.deleteStudent   =   function(id) {
            studentService.delete({'_id': id});
            $scope.students   =   studentService.query();
        }
}])

    .controller('StudentDetailController', ['$scope', '$routeParams', 'studentService', function($scope, $routeParams, studentService) {
    $scope.subtitel     =   'Student Detail';
    $scope.student        =   studentService.get({}, {'_id':$routeParams._id});
}])

    .controller('StudentEditController', ['$scope', '$routeParams', '$window', 'studentService', function($scope, $routeParams, $window, studentService) {
        $scope.subtitel     =   "Edit een studentfiche";
        $scope.student        =   studentService.get({},{'_id':$routeParams._id})
        console.log($routeParams._id);
        $scope.save         =   function(student) {
            if($scope.student._id) {
                // update
                console.log(student._id);
                studentService.update({_id:$scope.student._id}, $scope.student);
            } else {
                // nieuwe student
                console.log(student._id);
                $scope.student.$save().then(function response() {
                    $scope.students.push(response);
                })
            }
            window.location.assign('/');
        }
    }])




