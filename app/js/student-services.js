'use strict';

/* Services */
angular.module('oplApp.studentservices', ['ngResource'])
    .factory('studentService', ['$resource', function($resource) {
        var urlBase =   'api/students';
        var Student    =   $resource(
            urlBase + '/:_id',
            {_id: '@_id'},
            {
                update: {method: 'PUT'}
            }
        )
        //console.log(Student);
        return Student;
    }])

