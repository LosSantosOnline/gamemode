"use strict";

const vehicleManager = require("../vehicles/VehicleManager");
const logger = require('../vehicles/VehicleLogger');

async function boot() {
    logger.info("Booting vehicles from database.");
    vehicleManager.loadAll();
}

exports.boot = boot;