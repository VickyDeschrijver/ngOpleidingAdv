
var oplApp =

angular.module('oplApp', [
    'ngRoute',
    'ui.utils',
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

    .controller('SiteController', ['$scope', function($scope) {
        $scope.titel = "JS Adv - Opleidingen & Studenten";
    }]);

