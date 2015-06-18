
var oplApp =

angular.module('oplApp', [
    'ngRoute',
    'ui.utils',
    'pickadate',
    'angAccordion',
    'ngResource',
    'oplApp.students',
    'oplApp.opleidingen',
    'oplApp.studentservices',
    'oplApp.opleidingservices'
])


    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        $routeProvider

            .when('/', {
                templateUrl:  'partials/startpagina.html',
                controller:   'SiteController'
            })
            .when('/students', {
                templateUrl:  'partials/students.html',
                controller:   'StudentController'
            })
            .when('/students/new', {
                templateUrl:  'partials/studentform.html',
                controller:   'StudentEditController'
            })
            .when('/students/:_id', {
                templateUrl:  'partials/studentdetails.html',
                controller:   'StudentEditController'
            })
            .when('/students/edit/:_id', {
                templateUrl:  'partials/studentform.html',
                controller:   'StudentEditController'
            })
            .when('/students/oplnew/:_id', {
                templateUrl:    'partials/oplnew.html',
                controller:     'CompareController'
            })

            .when('/opleidingen', {
                templateUrl:  'partials/opleidingen.html',
                controller:   'OpleidingController'
            })
            .when('/opleidingen/new', {
                templateUrl:  'partials/opleidingform.html',
                controller:   'OpleidingEditController'
            })
            .when('/opleidingen/:_id', {
                templateUrl:  'partials/opleidingdetails.html',
                controller:   'OpleidingEditController'
            })
            .when('/opleidingen/edit/:_id', {
                templateUrl:  'partials/opleidingform.html',
                controller:   'OpleidingEditController'
            })


            .otherwise({redirectTo: '/'});
    }])


    .controller('CompareController', ['$scope', 'studentService', 'opleidingService', '$routeParams', '$http', function($scope, studentService, opleidingService, $routeParams, $http) {
        $http.get('http://localhost:8000/api/opleidingen').success(function(data) {
            //console.log('scope: ' + $scope);
            $scope.opleidingen = data;
        })
        $scope.student        =   studentService.get({}, {'_id':$routeParams._id});
        $scope.opleiding        =   opleidingService.get({}, {'_id':$routeParams._id});
        console.log($scope.student);





/*        $scope.save         =   function(opleiding) {
            if($scope.opleiding._id) {
                // update
                console.log(opleiding._id);
                opleidingService.update({_id:$scope.opleiding._id}, $scope.opleiding);
            } else {
                // nieuwe opleiding
                console.log(opleiding._id);
                $scope.opleiding.$save().then(function response() {
                    $scope.opleidingen.push(response);
                })
            }
            window.location.assign('/');
        }*/
/*

        $scope.save         =   function(student, opleiding) {
            if($scope.opleiding._id) {
                // update
                console.log(student._id);
                $scope.nieuweopleiding = {};
                $scope.nieuweopleiding.oplCode  =   opleiding._id;
                $scope.nieuweopleiding.begin    =   date;
                $scope.nieuweopleiding.geslaagd =   valueOf('checkboxModel.value1');
                $scope.student.opleiding.push($scope.nieuweopleiding);
                studentService.update({_id:$scope.student._id}, $scope.student.opleiding);
            }
            window.location.assign('/');
        }
*/




    }])

    .controller('CheckBoxController', ['$scope', function($scope) {
        $scope.checkboxModel = {
            value1 : true
        }
    }])


    .controller('SiteController', ['$scope', function($scope) {
        $scope.titel = "JS Adv - Opleidingen & Studenten";
        var vandaag = new Date();
        $scope.minDate = vandaag;
        $scope.maxDate = vandaag+1;



    }]);

