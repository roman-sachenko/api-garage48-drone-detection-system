'use strict';

const controller  = require(`${basePath}/src/controllers/log.controller`);

module.exports = (router) => {
  router
    .get('/logs/',  controller.getAll)
};