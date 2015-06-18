'use strict';

/* Services */
angular.module('oplApp.opleidingservices', ['ngResource'])

    .factory('opleidingService', ['$resource', function($resource) {
        var urlBase =   'api/opleidingen';
        var Opleiding    =   $resource(
            urlBase + '/:_id',
            {_id: '@_id'},
            {
                update: {method: 'PUT'}
            }
        )
        //console.log(Opleiding);
        return Opleiding;
    }])