'use strict';

angular.module('oplApp.opleidingen', [])

    .controller('OpleidingController',['$scope', '$http', 'opleidingService', function($scope, $http, opleidingService) {
        $scope.subtitel = "Opleidingen Lijst";

        $http.get('http://localhost:8080/api/opleidingen').success(function(data) {
            console.log('scope: ' + $scope);
            $scope.opleidingen = data;


        })


        $scope.deleteOpleiding   =   function(id) {
            opleidingService.delete({'_id': id});
            $scope.opleidingen   =   opleidingService.query();
        }
    }])

    .controller('OpleidingDetailController', ['$scope', '$routeParams', 'opleidingService', function($scope, $routeParams, opleidingService) {
        $scope.subtitel     =   'Opleiding Detail';
        $scope.opleiding        =   opleidingService.get({}, {'_id':$routeParams._id});
    }])

    .controller('OpleidingEditController', ['$scope', '$routeParams', '$window', 'opleidingService', function($scope, $routeParams, $window, opleidingService) {
        $scope.subtitel     =   "Edit een Opleidingsfiche";
        $scope.opleiding        =   opleidingService.get({},{'_id':$routeParams._id})
        console.log($routeParams._id);
        $scope.save         =   function(opleiding) {
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
        }
    }])

