'use strict';

const express   = require('express');
const appRoute  = express.Router({ strict: true });

/**
 * Log Routes
 */
require('./entities/log')(appRoute);


module.exports = appRoute;