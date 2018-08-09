"use strict";

const logger = require('../utils/logger');
const meta = require('../characters/characterModuleMeta');

const info = (message) => {
  logger.info("[" + meta.MODULE_NAME + "] " + message);
};

exports.info = info;

const error = (message) => {
  logger.error("[" + meta.MODULE_NAME + "] " + message);
};

exports.error = error;
