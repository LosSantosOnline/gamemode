"use strict";

const playerMisc = require('../player/PlayerMisc');
const vehicleManager = require("../vehicles/VehicleManager");

mp.events.add(
{
    "numpad5Key": (player) => {
        if (playerMisc.isVehicleDriver(player)) {
            const isVehicleConvertible = vehicleManager.checkIfVehicleIsConvertible(player.vehicle.informations.model);

            if (isVehicleConvertible) {
                player.call("lowerVehicleRoof", [player.vehicle]);
            }
        }
    },

    "numpad8Key": (player) => {
        if (playerMisc.isVehicleDriver(player)) {
            const isVehicleConvertible = vehicleManager.checkIfVehicleIsConvertible(player.vehicle.informations.model);

            if (isVehicleConvertible) {
                player.call("raiseVehicleRoof", [player.vehicle]);
            }
        }
    },

    "zKey": (player) => {
        let vehicle = vehicleManager.getClosestVehicleForPlayer(player, 2);
        
        if (vehicle) {
            vehicleManager.toggleVehicleLock(vehicle, player);
        }
    }
});
