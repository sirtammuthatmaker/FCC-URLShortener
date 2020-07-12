'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const dns = require('dns');
require('dotenv').config();

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;


mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>{
    console.log("Connection Success!");
})
.catch((error)=>{
    console.log("Connection failed:  "+error);
});


app.use(cors());


app.use(bodyParser.json(),bodyParser.urlencoded({extended:false}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/shorturl/:id", function (req, res) {
  const idRecieved = req.params.id;
  //handle shorturl ids
});

app.post("/api/shorturl/new", function (req, res){
  
  dns.lookup(req.body.url,(err)=>{
    if(err) {
    console.log("URL not valid!");
  } else {
    console.log("Sent by postman: "+req.body.url);
    //handle valid urls
  }
  })
  res.json({"original_url":req.body.url,"short_url":1});
})



app.listen(port, function () {
  console.log('Node.js listening: '+port);
});

