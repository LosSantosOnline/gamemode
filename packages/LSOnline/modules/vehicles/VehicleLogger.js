"use strict";

const Logger = require('../utils/Logger');

function info(message, ...args) {
    Logger.info("[Vehicle] " + message, args);
}

exports.info = info;