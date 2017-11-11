'use strict';

const MainService         = require('../main');
const SerialPortProvider  = require('serialport');

module.exports = class ServialPortService extends MainService {
  constructor(port) {
    super();
    this._port = port;
    this._serviceProvider = SerialPortProvider;

    this._serviceHandler  = new this._serviceProvider(this._port);
  }

  listen() {
    return this._serviceHandler;
  }
};