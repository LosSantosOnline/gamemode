"use strict";

function isVehicleDriver(player) {
    if (!player.vehicle || player.seat != -1) {
        return false;
    }
    
    return true;
}
exports.isVehicleDriver = isVehicleDriver;