'use strict';

process.env.NODE_ENV  = process.env.NODE_ENV || 'local';
global.basePath       = __dirname;

require(`${basePath}/src/services`);

require(`${basePath}/src/models/entities/Log.Model`);

const PORT            = 3000;
const SERIAL_PORT     = '/dev/ttyUSB0';
const http            = require('http');

const appConfig           = require(`${basePath}/src/config/app`);
const services            = require(`${basePath}/src/services`);
const DbService           = services.DATABASE_SERVICE;
const SerialPortService   = services.SERIAL_PORT;

const express         = require('express');
const app             = express();
const socket          = require('socket.io');

const server          = http.createServer(app);
const ioserver        = socket(server);
const dbService       = new DbService({ connectionString: appConfig.db.connectionString });
// const serialPort      = new SerialPortService(SERIAL_PORT);

// Establishing DB Connection
dbService.connect();


/**
 * Socket Connection Hanlder
 */
ioserver.on('connection', (socketConnection) => {

  log('Socket Server has been started');

  socketConnection.on('data', (data) => {
    let eventDate       =  new Date();
    let parsedData      = parsePortData(data);
    let formattedData   = formatPortData(parsedData);

    createPortLog(formattedData);

    ioserver.emit('stats_received', { data: formattedData, date: eventDate });
  });
});



server.listen(PORT);
log(`The server is running on port ${PORT}`);

/**
 * System Event Hanlers
 */
process.on('uncaughtException', onError);
process.on('exit', onExit);


/**
 * Functions
 * @param data
 * @returns {string|*}
 */
function parsePortData(data) {
  return data.toString();
}

function formatPortData(data) {
  return data;
}


function createPortLog(data) {
  const LogModel      = DbService.models()['Log'];
  const newLog        = new LogModel({ log_data: data });
  newLog.save();
}


function log(logMessage) {
  console.log(logMessage);
}


function onError(err) {
  log(err);
  process.exit(1);
}

function onExit() {
  log('Exit process');
}