"use strict";

const logger = require('../vehicles/VehicleLogger');
const database = require('../database/Database');
const vehicleData = require('../vehicles/VehicleData');
const helpers = require('../utils/Helpers');

async function create(player, vehicle, color, color2) {
    if (!color || !color2)
        color = [helpers.randomInt(0, 255), helpers.randomInt(0, 255), helpers.randomInt(0, 255)];
        color2 = [helpers.randomInt(0, 255), helpers.randomInt(0, 255), helpers.randomInt(0, 255)];

    database.vehicle
        .create({
            model: vehicle,
            fuelType: vehicleData.fuelTypes[0].type,
            fuelRatio: 1,
            tankCapacity: 40.0,
            owner: 1,
            primaryColor: JSON.stringify(color),
            secondaryColor: JSON.stringify(color2),
            plate: 'LSO',
            dimension: player.dimension,
            position: JSON.stringify(player.position)
        })
        .then(vehicle => {
            logger.info(`Saved vehicle "${vehicle.model}" in database.`);
            spawn(vehicle);
        })
}

exports.create = create;

async function load(vehicleId) {
    database.vehicle.findById(vehicleId).then(vehicle => {
        spawn(vehicle).finally();
    });
}

exports.load = load;

async function loadAll() {
    database.vehicle.findAll().then(vehicles => {
        for (let i = 0; i < vehicles.length; i++) {
            spawn(vehicles[i]);
        }
    });
}

exports.loadAll = loadAll;

async function spawn(vehicle) {
    if (vehicle.position === null) {
        logger.error(`Vehicle position is null (vehicleId: ${vehicle.id})`);
        return;
    }

    let carPosition = JSON.parse(vehicle.position);
    const createdVehicle = mp.vehicles.new(mp.joaat(vehicle.model), new mp.Vector3(carPosition.x, carPosition.y, carPosition.z),
        {
            dimension: vehicle.dimension
        });

    logger.info(`Spawned "${vehicle.model}" on world.`);
    configureVehicle(createdVehicle, vehicle);
}

function configureVehicle(createdVehicle, vehicleData) {
    try {
        let primaryColor = JSON.parse(vehicleData.primaryColor);
        let secondaryColor = JSON.parse(vehicleData.secondaryColor);

        createdVehicle.setColorRGB(primaryColor[0], primaryColor[1], primaryColor[2], secondaryColor[0], secondaryColor[1], secondaryColor[2]);
        createdVehicle.numberPlate = vehicleData.plate;
        createdVehicle.informations = {
            id: vehicleData.id,
            model: vehicleData.model,
            fuel: vehicleData.fuel,
            fuelType: vehicleData.fuelType,
            fuelRatio: vehicleData.fuelRatio,
            tankCapacity: vehicleData.tankCapacity,
            dirtLevel: vehicleData.dirtLevel,
        };

        logger.info(`Changed color and plate of vehicle "${vehicleData.model}" (ID: ${vehicleData.id})`);
    }
    catch (e) {
        logger.error(`Error occurred when configuring vehicle. (Message: ${e})`);
    }
}

function toggleVehicleEngine(vehicle) {
    vehicle.engine = !vehicle.engine;
}

exports.toggleVehicleEngine = toggleVehicleEngine;

function getCarData(model) {
    for (let i = 0; i < vehicleData.carsData.length; i++) {
        if (model !== vehicleData.carsData[i].model) continue;
        return vehicleData.carsData[i];
    }

    return false;
}

exports.getCarData = getCarData;