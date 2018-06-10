"use strict";

const Logger = require('../utils/Logger');

function info(message, ...args) {
    Logger.info("[Vehicle] " + message, args);
}

exports.info = info;

function error(message, ...args) {
    Logger.error("[Vehicle] " + message, args);
}

exports.error = error;