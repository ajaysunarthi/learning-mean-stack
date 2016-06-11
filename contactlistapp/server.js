var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
    console.log('GET request received');
    db.contactlist.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });

});

app.post('/contactlist', function(req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        //console.log(res);
        res.json(doc);
    });
});

app.listen(3000);
console.log('server running ar port 3000');
