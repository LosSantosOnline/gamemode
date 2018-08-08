"use strict";

const helpers = require('../utils/Helpers');
const database = require('../database/Database');
const logger = require('../vehicles/VehicleLogger');
const vehicleData = require('../vehicles/VehicleData');

async function create (player, model) {
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
            dimension: player.dimension,
            position: JSON.stringify(player.position)
        })
        .then(vehicle => {
            logger.info(`Saved vehicle "${vehicle.name}" (Model: ${vehicle.model}) in database.`);
            spawn(vehicle);
        });
}

exports.create = create;

function configureCreated (createdVehicle, vehicleData) {
    try {
        let vehiclePlate = `LS${vehicleData.id}`;
        let primaryColor = JSON.parse(vehicleData.primaryColor);
        let secondaryColor = JSON.parse(vehicleData.secondaryColor);

        createdVehicle.setColorRGB(primaryColor[0], primaryColor[1], primaryColor[2], secondaryColor[0], secondaryColor[1], secondaryColor[2]);
        createdVehicle.numberPlate = vehiclePlate;
        createdVehicle.informations = {
            id: vehicleData.id,
            gameId: createdVehicle.id,
            name: vehicleData.name,
            model: vehicleData.model,
            fuel: vehicleData.fuel,
            fuelType: vehicleData.fuelType,
            fuelRatio: vehicleData.fuelRatio,
            tankCapacity: vehicleData.tankCapacity,
            dirtLevel: vehicleData.dirtLevel
        };
    } catch (e) {
        logger.error(`Error occurred when configuring vehicle "${vehicleData.name}" (ID: ${vehicleData.id} / Model: ${vehicleData.model}). (Message: ${e})`);
    }
}

async function load (vehicleId) {
    database.vehicle.findById(vehicleId).then(vehicle => {
        spawn(vehicle);
    });
}

exports.load = load;

const loadAll = async () => {
    database.vehicle.findAll().then(vehicles => {
        for (let i = 0; i < vehicles.length; i++) {
            spawn(vehicles[i]);
        }
    });
};

exports.loadAll = loadAll;

async function spawn (vehicle) {
    if (vehicle.position === null) {
        return logger.error(`Vehicle position is null (vehicleId: ${vehicle.id})!`);
    }

    let carPosition = JSON.parse(vehicle.position);
    const createdVehicle = mp.vehicles.new(mp.joaat(vehicle.model), new mp.Vector3(carPosition.x, carPosition.y, carPosition.z),
        {
            locked: true,
            engine: false,
            dimension: vehicle.dimension
        });
        
    // logger.info(`Spawned vehicle "${vehicle.name}" (GameID: ${createdVehicle.id} / ID: ${vehicle.id} / Model: ${vehicle.model}) on world.`);
    configureCreated(createdVehicle, vehicle);
}

const respawnAll = async () => {
    mp.vehicles.forEach((vehicle) => vehicle.destroy());
    await loadAll();
};

exports.respawnAll = respawnAll;

async function unspawn (vehicle) {
    if (vehicle) vehicle.destroy();
}

exports.unspawn = unspawn;

async function refuel (vehicleId, fuel) {
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

async function updateName (vehicleId, name) {
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

async function remove (vehicleId) {
    database.vehicle.findById(vehicleId).then(vehicle => {
        vehicle
            .destroy()
            .then(() => {
                logger.info(`Removed vehicle "${vehicle.name}" (Model: ${vehicle.model} / ID: ${vehicle.id}) from database.`);
            })
            .catch((err) => {
                logger.error(`Error occurred when removing vehicle "${vehicle.name}" (Model: ${vehicle.model} / ID: ${vehicle.id}). (Message: ${err})`);
            });
    });
}

exports.remove = remove;

function getClosestVehicleForPlayer (player, range) {
    let foundVehicle = null;

    mp.vehicles.forEachInRange(player.position, range, player.dimension,
        (vehicle) => {
            foundVehicle = vehicle;
        }
    );

    return foundVehicle;
}

exports.getClosestVehicleForPlayer = getClosestVehicleForPlayer;

function getVehicleById (vehicleId) {
    let foundVehicle = null;

    mp.vehicles.forEach(
        (vehicle) => {
            if (vehicle.informations.id === vehicleId) {
                foundVehicle = vehicle;
            }
        }
    );

    return foundVehicle;
}

exports.getVehicleById = getVehicleById;

function toggleVehicleEngine (vehicle) {
    vehicle.engine = !vehicle.engine;
}

exports.toggleVehicleEngine = toggleVehicleEngine;

function toggleVehicleLock (vehicle, player) {
    const actionType = vehicle.locked ? 'otwiera' : 'zamyka';

    if (vehicle.locked) {
        vehicle.locked = false;
    } else {
        const isVehiclePoliceModel = checkIfVehicleModelIsPolice(vehicle.informations.model);
        vehicle.locked = true;

        if (isVehiclePoliceModel) {
            player.call("setDoorsLockedInSpecialVehicle", [vehicle]);
        }
    }

    mp.players.broadcastInRange(player.position, 20, player.dimension, `!{#dca2f4} * ${player.name} ${actionType} drzwi pojazdu ${vehicle.informations.name}.`);
}

exports.toggleVehicleLock = toggleVehicleLock;

function togglePoliceRadar (vehicle, player) {
    const actionType = vehicle.data.policeRadar ? 'wyłącza' : 'włącza';
    const isVehiclePoliceModel = checkIfVehicleModelIsPolice(vehicle.informations.model);

    if (isVehiclePoliceModel) {
        vehicle.data.policeRadar
            ? vehicle.data.policeRadar = false
            : vehicle.data.policeRadar = true;

        mp.players.broadcastInRange(player.position, 20, player.dimension, `!{#dca2f4} * ${player.name} ${actionType} radar w pojeździe ${vehicle.informations.name}.`);
    }
}

exports.togglePoliceRadar = togglePoliceRadar;

const getCarData = (model) => {
    for (let i = 0; i < vehicleData.carsData.length; i++) {
        if (model !== vehicleData.carsData[i].model) continue;
        return vehicleData.carsData[i];
    }

    return false;
};

exports.getCarData = getCarData;

const checkIfVehicleModelExists = (model) => {
    if (model in vehicleData.vehicleHashes) {
        return true;
    }

    return false;
};

exports.checkIfVehicleModelExists = checkIfVehicleModelExists;

// Temporary cuz getting vehicleClass on client-side or using native not working.
const checkIfVehicleModelIsPolice = (model) => {
    if (model in vehicleData.policeVehicleHashes) {
        return true;
    }

    return false;
};

exports.checkIfVehicleModelIsPolice = checkIfVehicleModelIsPolice;

const checkIfVehicleIsConvertible = (model) => {
    if (model in vehicleData.vehiclesThatHaveRoofHashes) {
        return true;
    }

    return false;
};

exports.checkIfVehicleIsConvertible = checkIfVehicleIsConvertible;
