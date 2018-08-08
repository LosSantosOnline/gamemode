"use strict";

const logger = require('../utils/Logger');
const meta = require('../characters/CharacterModuleMeta');

const info = (message) => {
    logger.info("[" + meta.MODULE_NAME + "] " + message);
};

exports.info = info;

const error = (message) => {
    logger.error("[" + meta.MODULE_NAME + "] " + message);
};

exports.error = error;
