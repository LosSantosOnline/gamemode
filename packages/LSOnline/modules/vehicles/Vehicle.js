"use strict";

const Logger = require('../vehicles/VehicleLogger');
const Database = require('../database/Database');
const VehicleData = require('../vehicles/VehicleData');
const Randomize = require('../utils/Randomize');

async function saveVehicle(player, vehicle, color, color2) {
    if (!color || !color2)
        color = [Randomize.int(0, 255), Randomize.int(0, 255), Randomize.int(0, 255)];
    color2 = [Randomize.int(0, 255), Randomize.int(0, 255), Randomize.int(0, 255)];

    Database.vehicle
        .create({
            model: vehicle.model,
            fuelType: vehicle.fuelType,
            fuelRatio: vehicle.fuelRatio,
            tankCapacity: vehicle.tankCapacity,
            owner: '1',
            primaryColor: JSON.stringify(color),
            secondaryColor: JSON.stringify(color2),
            plate: 'LSO',
            dimension: player.dimension,
            position: JSON.stringify(player.position)
        })
        .then(vehicle => {
            Logger.info(`Saved vehicle "${vehicle.model}" in database.`);
            spawnCreatedVehicle(vehicle)
        })
}

module.exports.saveVehicle = saveVehicle;

async function spawnCreatedVehicle(vehicle) {
    let carPosition = JSON.parse(vehicle.position);

    const createdVehicle = mp.vehicles.new(mp.joaat(vehicle.model), new mp.Vector3(carPosition.x, carPosition.y, carPosition.z),
        {
            dimension: vehicle.dimension
        });

    Logger.info(`Spawned "${vehicle.model}" on world.`);
    configureVehicle(createdVehicle, vehicle);
}


function configureVehicle(createdVehicle, vehicleData) {
    let primaryColor = JSON.parse(vehicleData.primaryColor);
    let secondaryColor = JSON.parse(vehicleData.secondaryColor);

    createdVehicle.setColorRGB(primaryColor[0], primaryColor[1], primaryColor[2], secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    createdVehicle.numberPlate = vehicleData.plate;

    Logger.info(`Changed color and plate of vehicle "${vehicle.model}".`)
}

function getCarData(model) {
    for (let i = 0; i < VehicleData.carsData.length; i++) {
        if (model !== VehicleData.carsData[i].model) continue;
        return VehicleData.carsData[i];
    }

    return false;
}

module.exports.getCarData = getCarData;
