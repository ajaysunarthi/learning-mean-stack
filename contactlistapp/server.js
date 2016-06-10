var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send('Hello orld from server');
});
app.listen(3000);
console.log('server running ar port 3000');