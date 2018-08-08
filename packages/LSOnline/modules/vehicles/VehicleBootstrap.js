"use strict";

const logger = require('./VehicleLogger');
const vehicleManager = require("./VehicleManager");

const boot = async () => {
    logger.info("Booting vehicles from database.");
    vehicleManager.loadAll();
};

exports.boot = boot;
