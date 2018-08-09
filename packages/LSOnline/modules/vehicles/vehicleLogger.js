"use strict";

const logger = require('../utils/logger');

const info = (message) => {
  logger.info("[Vehicle] " + message);
};

exports.info = info;

const error = (message) => {
  logger.error("[Vehicle] " + message);
};

exports.error = error;
