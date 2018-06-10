"use strict";

const vehicleManager = require("../vehicles/VehicleManager");
const Logger = require('../vehicles/VehicleLogger');

async function boot() {
    Logger.info("Booting vehicles from database.");
    vehicleManager.loadAll();
}

module.exports.boot = boot;