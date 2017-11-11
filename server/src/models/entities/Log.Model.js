'use strict';

const DbService     = require(`${basePath}/src/services`).DATABASE_SERVICE;
const schema        = require('./schemas/log.schema');

const model = DbService.createModel('Log', schema);

module.exports = model;