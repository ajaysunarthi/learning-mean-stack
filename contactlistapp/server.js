var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res) {
    console.log('GET request received');
    db.contactlist.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });

});

app.listen(3000);
console.log('server running ar port 3000');
