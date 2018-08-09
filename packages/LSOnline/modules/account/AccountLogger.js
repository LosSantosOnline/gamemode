"use strict";

const logger = require('../utils/logger');
const meta = require('../account/accountModuleMeta');

function info (message) {
  logger.info("[" + meta.MODULE_NAME + "] " + message);
}

exports.info = info;

function error (message) {
  logger.error("[" + meta.MODULE_NAME + "] " + message);
}

exports.error = error;
