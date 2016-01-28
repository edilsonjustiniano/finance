var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var idProcurado = new ObjectID('56aa923d44c1248103d6c582');

MongoClient.connect('mongodb://127.0.0.1:27017/finance',
    function(error, db) {
        if (error) {
            throw err;
        }
        db.collection('creditcards').findOne({
            _id: idProcurado
        }, function(error, data) {
            if (error) {
                throw err;
            }
            console.log(data);
        })
    })
