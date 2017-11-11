'use strict';

process.env.NODE_ENV  = process.env.NODE_ENV || 'local';
global.basePath       = __dirname;

const PORT            = 3000;
const http            = require('http');

const appConfig       = require(`${basePath}/src/config/app`);
const services        = require(`${basePath}/src/services`);
const DbService       = services.DATABASE_SERVICE;

const express         = require('express');
const app             = express();
const socket          = require('socket.io');

const server          = http.createServer(app);
const ioserver        = socket(server);
const dbService       = new DbService({ connectionString: appConfig.db.connectionString });


// Establishing DB Connection
dbService.connect();


ioserver.on('connection', (socketConnection) => {
  console.log('Socket Server has been started');
  setInterval(() => {
    let statsData = {};
    ioserver.emit('stats_received', statsData);
  })
});



server.listen(PORT);
log(`The server is running on port ${PORT}`);


function log(logMessage) {
  console.log(logMessage);
}


