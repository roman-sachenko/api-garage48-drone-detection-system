'use strict';

const services        = require(`${basePath}/src/services`);
const DbService       = services.DATABASE_SERVICE;
const responseService = services.RESPONSE_SERVICE;
const LogModel        = DbService.models()['Log'];

module.exports = {
  getAll: (req, res, next) => {
    LogModel.find({})
      .then(logList => {
        responseService.sendSuccessResponse(res, logList);
      })
      .catch(err => {
        responseService.sendErrorResponse(res, err);
      });
  }
};