'use strict';

module.exports = {
  DATABASE_SERVICE          : require('./entities/database.service'),
  FREQUENCY_PARSER_SERVICE  : require('./entities/frequency.parser'),
  RESPONSE_SERVICE          : require('./entities/response.service'),
  SERIAL_PORT               : require('./entities/serial.port.service'),
};