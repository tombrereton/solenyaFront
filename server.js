"use strict";

var port = process.env.PORT || 8000;

var http = require("http");
var express = require("express");
var path = require("path");
var fs = require("fs");
require("dotenv").config();

fs.existsSync = fs.existsSync || require("path").existsSync;

var app = express();

//
app.use(express.static(`${__dirname}/public`));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

var server = http.createServer(app);

server.listen(port, function() {
  console.log("Listening on port: ", port);
});
