/**
 * Created by bbonet on 8/16/14.
 */
var express = require("express");
var logfmt = require("logfmt");
var path = require("path");
var app = express();

console.log(path);
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'dist')));
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.render("index.html");
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});