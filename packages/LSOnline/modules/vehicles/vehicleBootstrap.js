"use strict";

const logger = require('./vehicleLogger');
const vehicleManager = require("./vehicleManager");

const boot = async () => {
  logger.info("Booting vehicles from database.");
  vehicleManager.loadAll();
};

exports.boot = boot;
