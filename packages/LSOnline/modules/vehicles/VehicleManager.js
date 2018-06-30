"use strict";

const logger = require('../vehicles/VehicleLogger');
const database = require('../database/Database');
const vehicleData = require('../vehicles/VehicleData');
const helpers = require('../utils/Helpers');

async function create(player, model) {
    const primaryColor = [helpers.randomInt(0, 255), helpers.randomInt(0, 255), helpers.randomInt(0, 255)];
    const secondaryColor = [helpers.randomInt(0, 255), helpers.randomInt(0, 255), helpers.randomInt(0, 255)];
    

    database.vehicle
        .create({
            name: model,
            model: model,
            fuelType: vehicleData.fuelTypes[0].type,
            fuelRatio: 1,
            tankCapacity: 40.0,
            owner: 1,
            primaryColor: JSON.stringify(primaryColor),
            secondaryColor: JSON.stringify(secondaryColor),
            plate: 'LSO',
            dimension: player.dimension,
            position: JSON.stringify(player.position)
        })
        .then(vehicle => {
            logger.info(`Saved vehicle "${vehicle.name}" (Model: ${vehicle.model}) in database.`);
            spawn(vehicle);
        })
}

exports.create = create;

async function load(vehicleId) {
    database.vehicle.findById(vehicleId).then(vehicle => {
        spawn(vehicle);
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

async function unspawn(vehicle) {
    if(vehicle)
        vehicle.destroy();
}

exports.unspawn = unspawn;

async function spawn(vehicle) {
    if (vehicle.position === null) {
        logger.error(`Vehicle position is null (vehicleId: ${vehicle.id})!`);
        return;
    }

    let carPosition = JSON.parse(vehicle.position);
    const createdVehicle = mp.vehicles.new(mp.joaat(vehicle.model), new mp.Vector3(carPosition.x, carPosition.y, carPosition.z),
        {
            dimension: vehicle.dimension
        });

    logger.info(`Spawned vehicle "${vehicle.name}" (GameID: ${createdVehicle.id} / ID: ${vehicle.id} / Model: ${vehicle.model}) on world.`);
    configureCreated(createdVehicle, vehicle);
}

function configureCreated(createdVehicle, vehicleData) {
    try {
        let primaryColor = JSON.parse(vehicleData.primaryColor);
        let secondaryColor = JSON.parse(vehicleData.secondaryColor);

        createdVehicle.setColorRGB(primaryColor[0], primaryColor[1], primaryColor[2], secondaryColor[0], secondaryColor[1], secondaryColor[2]);
        createdVehicle.numberPlate = vehicleData.plate;
        createdVehicle.informations = {
            id: vehicleData.id,
            gameId: createdVehicle.id,
            name: vehicleData.name,
            model: vehicleData.model,
            fuel: vehicleData.fuel,
            fuelType: vehicleData.fuelType,
            fuelRatio: vehicleData.fuelRatio,
            tankCapacity: vehicleData.tankCapacity,
            dirtLevel: vehicleData.dirtLevel,
        };

        logger.info(`Configured newly spawned vehicle "${vehicleData.name}" (GameID: ${createdVehicle.informations.gameId} / ID: ${vehicleData.id} / Model: ${vehicleData.model}).`);
    }
    catch (e) {
        logger.error(`Error occurred when configuring vehicle "${vehicleData.name}" (ID: ${vehicleData.id} / Model: ${vehicleData.model}). (Message: ${e})`);
    }
}

async function refuel(vehicleId, fuel) {
    database.vehicle.findById(vehicleId).then(vehicle => {
        vehicle
            .update({fuel: database.Sequelize.literal(`fuel + ${fuel}`)})
            .then((vehicle) => {
                logger.info(`Refueled vehicle "${vehicle.name}" (Model: ${vehicle.model} / ID: ${vehicle.id}).`);
            })
            .catch((err) => {
                logger.error(`Error occurred when refueling vehicle "${vehicle.name}" (Model: ${vehicle.model} / ID: ${vehicle.id}). (Message: ${err})`);
            });
    });
}

exports.refuel = refuel;

async function updateName(vehicleId, name) {
    database.vehicle.findById(vehicleId).then(vehicle => {
        vehicle
            .update({name: name})
            .then((vehicle) => {
                logger.info(`Changed vehicle "${vehicle.name}" name (Model: ${vehicle.model} / ID: ${vehicle.id}).`);
            })
            .catch((err) => {
                logger.error(`Error occurred when changing vehicle "${vehicle.name}" name (Model: ${vehicle.model} / ID: ${vehicle.id}). (Message: ${err})`);
            });
    });
}

exports.updateName = updateName;

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

function checkIfVehicleModelExists(model) {
    if(model in vehicleData.vehicleHashes) {
        return true;
    }
    
    return false;
}

exports.checkIfVehicleModelExists = checkIfVehicleModelExists;

function respawnAll() {
    mp.vehicles.forEach((vehicle) => vehicle.destroy());
    loadAll();
}

exports.respawnAll = respawnAll;