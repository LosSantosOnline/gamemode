"use strict";

const Logger = require('../utils/Logger');

function info(message) {
    Logger.info("[Vehicle] " + message);
}

exports.info = info;

function error(message) {
    Logger.error("[Vehicle] " + message);
}

exports.error = error;