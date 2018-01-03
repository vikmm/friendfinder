var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Calling out the Port I will connecting to 

var app = express(); 
var PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + "/app"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Calling out the routes I have created

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


//Where the App will listen for the Port

app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT: " + PORT);
});