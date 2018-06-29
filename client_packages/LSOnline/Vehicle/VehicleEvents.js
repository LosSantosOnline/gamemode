"use strict";

mp.events.add({
    "playerEnterVehicle": (vehicle, seat) => {
        const engineStatus = vehicle.engine ? true : false;

        vehicle.setEngineOn(engineStatus, false, true);
        vehicle.setUndriveable(engineStatus);
    }
});