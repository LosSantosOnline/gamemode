'use strict';

const { isVehicleDriver } = require('../player/playerMisc');
const { toggleVehicleLock } = require('../vehicles/vehicleManager');
const { getClosestVehicleForPlayer, checkIfVehicleIsConvertible } = require('../vehicles/vehicleMisc');

mp.events.add({
  keyNumpad: player => {
    if (isVehicleDriver(player)) {
      const isVehicleConvertible = checkIfVehicleIsConvertible(player.vehicle.informations.model);

      if (isVehicleConvertible) {
        player.call('lowerVehicleRoof', [player.vehicle]);
      }
    }
  },

  keyNumpad8: player => {
    if (isVehicleDriver(player)) {
      const isVehicleConvertible = checkIfVehicleIsConvertible(player.vehicle.informations.model);

      if (isVehicleConvertible) {
        player.call('raiseVehicleRoof', [player.vehicle]);
      }
    }
  },

  keyZ: player => {
    let vehicle = getClosestVehicleForPlayer(player, 2);

    if (vehicle) {
      toggleVehicleLock(vehicle, player);
    }
  },

  keyY: player => {
    if (isVehicleDriver(player)) {
      let engineCommand = rp.commands.get('engine');

      engineCommand.run(player);
    }
  }
});
