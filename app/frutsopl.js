/*
 * data voor db 'opleidingen' en de collection 'frutsotheek'
 * dit script uitvoeren in Mongo Shell als 'mongo frutsotheek.js'
 */

var conn    = new Mongo('localhost:27017');
var db      = conn.getDB('frutsotheek');

db.opleidingen.insert({'oplCode': 123456, 'oplNaam': 'Winteren', 'beschrijving': 'blablablablabla', 'duurtijd': 5});
db.opleidingen.insert({'oplCode': 242424, 'oplNaam': 'Zingen onder de douche', 'beschrijving': 'lalalalalala', 'duurtijd': 15});
db.opleidingen.insert({'oplCode': 252525, 'oplNaam': 'Slapen', 'beschrijving': 'zzzzzzzzzzzzzzz', 'duurtijd': 3});
db.opleidingen.insert({'oplCode': 272727, 'oplNaam': 'Bestuderen', 'beschrijving': 'Hmmmmmmmmm uhmmmm', 'duurtijd': 8});
db.opleidingen.insert({'oplCode': 343434, 'oplNaam': 'Knikkebollen', 'beschrijving': 'uhuhuhuhuhuh', 'duurtijd': 22});


db.opleidingen.find();


/**
 * Created by cyber05 on 17/06/2015.
 */
