'use strict';

const { isVehicleDriver } = require('../player/playerMisc');
const { pushHelpMessage } = require('../player/playerService');
const { checkIfVehicleIsConvertible } = require('../vehicles/vehicleMisc');
const { getClosestVehicleForPlayer, toggleVehicleLock } = require('../vehicles/vehicleService');

mp.events.add({
  playerEnterVehicle: (player, vehicle, seat) => {
    const isVehicleConvertible = checkIfVehicleIsConvertible(player.vehicle.informations.model);

    if (seat === -1) {
      pushHelpMessage(player, `Wsiadłeś do pojazdu, aby odpalić silnik naciśnij ~h~~b~Y~w~.`);

      if (isVehicleConvertible) {
        pushHelpMessage(player, `Naciśnij ~INPUT_DUCK~ aby otworzyć dach w pojeździe lub ~INPUT_SPRINT~ aby go zamknąć.`);
      }
    }
  },

  keyLeftCtrl: player => {
    if (isVehicleDriver(player)) {
      const isVehicleConvertible = checkIfVehicleIsConvertible(player.vehicle.informations.model);

      if (isVehicleConvertible) {
        player.call('lowerVehicleRoof', [player.vehicle]);
      }
    }
  },

  keyLeftShift: player => {
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
      rp.commands.get('engine').run(player);
    }
  }
});
