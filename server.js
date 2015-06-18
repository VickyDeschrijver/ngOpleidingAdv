/* server.js */

// module dependencies
var application_root    =   __dirname,
    express =   require('express'),
    path    =   require('path'),
    mongoose    =   require('mongoose'),
    bodyParser  =   require('body-parser');

// server
var app =   express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(application_root, 'app')));

// start server op poort: 8080
var port    =   8000;
app.listen(port, function() {
    console.log('Express server luistert op poort %d in %s mode',port,app.settings.env);
})


 // connect to mongodb met mongoose
 mongoose.connect('mongodb://localhost/frutsotheek');
var Schema = mongoose.Schema;

 var OpleidingSchema    =   new Schema({
 oplCode:    Number,
 oplNaam:    String,
 beschrijving:   String,
 duur:       Number
 },
     {collection: "opleidingen"})

 // Cursist Schema
 var CursistSchema    =   new Schema({
 iklNr:      Number,
 rrNr:       Number,
 familieNaam:    String,
 voorNaam:   String,
 adres:      String,
 email:      String,
 telNr:      Number,
 opleiding: [{oplCode: String, oplNaam: String, begin: Date, geslaagd: Boolean }]


 })

 // MongoDB Model
 var CursistModel    =   mongoose.model('Students', CursistSchema);
//console.log(CursistSchema);
 var OpleidingsModel = mongoose.model('Opleidingen', OpleidingSchema);
//console.log(OpleidingSchema);

 // ROUTES STUDENTS==================================================

 app.get('/api', function(request, response) {
 response.send('DB is actief');
 })


 // GET /api/students alle studenten tonen
 app.get('/api/students', function(request, response) {

 return CursistModel.find(function(err, students) {
 if(!err) {
 response.send(students);
 } else {
 return console.log(err);
 }
 })
 })



// GET /api/students/id: get een enkele student by id
app.get('/api/students/:id', function(request, response) {
 return CursistModel.findById(request.params.id, function(err, student) {
  if(!err) {
   response.send(student);    // één student
  } else {
   return console.log(err);
  }
 })
})


// POST /api/students: student toevoegen
app.post('/api/students', function(request, response) {
 var student    =   new CursistModel({
  studentId:  request.body.studentId,
  iklNr:      request.body.iklNr,
  rrNr:       request.body.rrNr,
  familieNaam:    request.body.familieNaam,
  voorNaam:   request.body.voorNaam,
  adres:      request.body.adres,
  email:      request.body.email,
  telNr:      request.body.telNr,
  opleiding:  request.body.opleiding

 });

 student.save(function(err) {
  if(!err) {
   return console.log('created');
  } else {
   return console.log('oeps' + err);
  }
 })
 return response.send(student);
});

// PUT api/students/id: update een studentfiche
app.put('/api/students/:id', function(request, response) {
 console.log('updating student' + request.body.titel);
 return CursistModel.findById(request.params.id, function(err, student) {
  console.log(student.studentId);
      student.studentId  =     request.body.studentId,
      student.iklNr   =   request.body.iklNr,
      student.rrNr=       request.body.rrNr,
      student.familieNaam=    request.body.familieNaam,
      student.voorNaam=   request.body.voorNaam,
      student.adres=     request.body.adres,
      student.email=      request.body.email,
      student.telNr=      request.body.telNr,
      student.opleiding=  request.body.opleiding

  return student.save(function(err) {
   if(!err) {
    console.log('student geupdated');
   } else {
    return console.log(err);
   }
   return response.send(student);
  });
 })
})


// DELETE api/students/id: delete een student
app.delete('/api/students/:id', function(request, response) {
 console.log('hoi');
 console.log('verwijderen student met id ' + request.params.id);
 return CursistModel.findById(request.params.id, function(err, student) {
  return student.remove(function(err) {
   if(!err) {
    console.log('student gewist');
    return response.send('');
   } else {
    return console.log(err);
   }
  })
 })
})





// ROUTES OPLEIDINGEN ==================================================

// GET /api/opleidingen alle opleidingen tonen
app.get('/api/opleidingen', function(request, response) {

 return OpleidingsModel.find(function(err, opleidingen) {
  if(!err) {
   //console.log(opleidingen);
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



