'use strict';

const PORT      = 4000;
const http      = require('http');
const express   = require('express');
const app       = express();
const server    = http.Server(app).listen(PORT);


log(`The client is running on port ${PORT}`);


function log(logMessage) {
  console.log(logMessage);
}


