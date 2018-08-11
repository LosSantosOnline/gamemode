'use strict';

const playerMisc = require('../player/playerMisc');
const vehicleManager = require("../vehicles/vehicleManager");

mp.events.add({
  keyNumpad: player => {
    if (playerMisc.isVehicleDriver(player)) {
      const isVehicleConvertible = vehicleManager.checkIfVehicleIsConvertible(player.vehicle.informations.model);

      if (isVehicleConvertible) {
        player.call("lowerVehicleRoof", [player.vehicle]);
      }
    }
  },

  keyNumpad8: player => {
    if (playerMisc.isVehicleDriver(player)) {
      const isVehicleConvertible = vehicleManager.checkIfVehicleIsConvertible(player.vehicle.informations.model);

      if (isVehicleConvertible) {
        player.call("raiseVehicleRoof", [player.vehicle]);
      }
    }
  },

  keyZ: player => {
    let vehicle = vehicleManager.getClosestVehicleForPlayer(player, 2);

    if (vehicle) {
      vehicleManager.toggleVehicleLock(vehicle, player);
    }
  },

  keyY: player => {
    if (playerMisc.isVehicleDriver(player)) {
      let engineCommand = rp.commands.get('engine');

      engineCommand.run(player);
    }
  }
});
