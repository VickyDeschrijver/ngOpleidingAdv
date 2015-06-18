
jQuery.post('api/opleidingen',{
    'iklNr': 24,
    'rrNr': 84072615604,
    'familieNaam': 'Deschrijver',
    'voorNaam': 'Vicky',
    'adres': 'Drie Eikenstraat 128 2650 Edegem',
    'email': 'deschrijvervicky@hotmail.com',
    'telNr': '0497540622',
    'opleiding':[{
        'oplCode': '121',
        'oplNaam': 'Front End',
        'beschrijving': 'Puzzelen met CSS en JS',
        'duurtijd': 8,
        'begin': 2014-11-08,
        'geslaagd': false
    }]
})



    .when('/opleidingen', {
        templateUrl:  'partials/opleidingen.html',
        controller:   'opleidingController'
    })
    .when('/opleidingen/new', {
        templateUrl:  'partials/opleidingform.html',
        controller:   'opleidingEditController'
    })
    .when('/opleidingen/:_id', {
        templateUrl:  'partials/opleidingdetails.html',
        controller:   'opleidingEditController'
    })
    .when('/opleidingen/edit/:_id', {
        templateUrl:  'partials/opleidingform.html',
        controller:   'opleidingEditController'
    })


fontawesome-chevron-down
fontawesome-chevron-up




// ROUTES OPLEIDINGEN ==================================================

app.get('/api', function(request, response) {
    response.send('DB is actief');
})


// GET /api/opleidingen alle opleidingen tonen
app.get('/api/opleidingen', function(request, response) {

    return OpleidingsModel.find(function(err, opleidingen) {
        if(!err) {
            response.send(opleidingen);
        } else {
            return console.log(err);
        }
    })
})

// GET /api/opleidingen/id: get een enkele opleiding by id
app.get('/api/opleidingen/:id', function(request, response) {
    return OpleidingsModel.findById(request.params.id, function(err, opleiding) {
        if(!err) {
            response.send(opleiding);    // één opleiding
        } else {
            return console.log(err);
        }
    })
})


// POST /api/opleidingen: opleiding toevoegen
app.post('/api/opleidingen', function(request, response) {
    var opleiding    =   new OpleidingsModel({
        opleidingId:    request.body.opleidingId,
        oplCode:        request.body.oplCode,
        oplNaam:        request.body.oplNaam,
        beschrijving:   request.body.beschrijving,
        duur:           request.body.duur
    });

    opleiding.save(function(err) {
        if(!err) {
            return console.log('created');
        } else {
            return console.log('oeps' + err);
        }
    })
    return response.send(opleiding);
});

// PUT api/opleidingen/id: update een opleidingfiche
app.put('/api/opleidingen/:id', function(request, response) {
    console.log('updating opleiding' + request.body.titel);
    return OpleidingsModel.findById(request.params.id, function(err, opleiding) {
        console.log(opleiding.opleidingId);
            opleiding.opleidingId   =   request.body.opleidingId,
            opleiding.oplCode       =   request.body.oplCode,
            opleiding.oplNaam       =   request.body.oplNaam,
            opleiding.beschrijving  =   request.body.beschrijving,
            opleiding.duur          =   request.body.duur

        return opleiding.save(function(err) {
            if(!err) {
                console.log('opleiding geupdated');
            } else {
                return console.log(err);
            }
            return response.send(opleiding);
        });
    })
})


// DELETE api/opleidingen/id: delete een opleiding
app.delete('/api/opleidingen/:id', function(request, response) {
    console.log('hoi');
    console.log('verwijderen opleiding met id ' + request.params.id);
    return OpleidingsModel.findById(request.params.id, function(err, opleiding) {
        return opleiding.remove(function(err) {
            if(!err) {
                console.log('opleiding gewist');
                return response.send('');
            } else {
                return console.log(err);
            }
        })
    })
})