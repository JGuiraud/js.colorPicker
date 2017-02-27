var express = require('express');
var app = express();
var path = require('path')
// var jsonColors = ;

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function (req, res) {
	res.redirect("/home");
})

app.get("/home", function (req, res) {
	res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
})

app.listen(1337, function () {
    console.log('Listening on port 1337!');
});