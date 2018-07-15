var express = require('express');

//Create
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Express Server on port 3000');
});