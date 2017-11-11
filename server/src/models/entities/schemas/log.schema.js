'use strict';

const _                   = require('lodash');
const DbService           = require(`${basePath}/src/services`).DATABASE_SERVICE;

let schemaData = {
  log_data: { type: String }
};

let schemaOptions = {
  toJSON      : { getters: true },
  toObject    : { getters: true },
  timestamps  : { createdAt: 'created_at' }
};


module.exports = DbService.createSchema(schemaData, schemaOptions);
