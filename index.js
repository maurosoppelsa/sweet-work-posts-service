/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

/* Database configuration */
const database = require('./app/config/dbconfig');

/* Init database */
database.init();

/* Init server listening */
const port = process.argv[2] || 3000;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = '/api';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: OPTIONS, GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control, Accept");
    
    if('OPTIONS' == req.method){
        res.status(200).send({});
    } else {
        next();
    }

  });


app.use(REST_API_ROOT, require('./app/routes/router'));