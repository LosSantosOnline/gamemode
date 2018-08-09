"use strict";

const logger = require('../utils/logger');
const vehicleManager = require("./vehicleManager");

const boot = async () => {
  vehicleManager.loadAll();

  logger('server', `Successfully bootstrapped vehicles!`, 'info');
};

exports.boot = boot;
