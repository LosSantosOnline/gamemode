"use strict";

const logger = require('../utils/Logger');
const meta = require('CharacterModuleMeta');

function info(message) {
    logger.info("[" + meta.MODULE_NAME + "] " + message);
}

exports.info = info;

function error(message) {
    logger.error("[" + meta.MODULE_NAME + "] " + message);
}

exports.error = error;