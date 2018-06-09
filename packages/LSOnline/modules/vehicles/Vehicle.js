"use strict";

// Requires
const Logger = require('../utils/Logger')
const Database = require('../database/Database')
const VehicleData = require('../vehicles/VehicleData')

/**
 * Create vehicle in database.
 * 
 * @param {*} model 
 * @param {*} plate 
 */
async function createVehicleInDatabse(player, vehicle, color, color2)
{
    if (!color || !color2)
        color = [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];
        color2 = [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];

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
            Logger.info(`[Database] [Vehicle] Created vehicle "${vehicle.model}" in database.`)
            spawnCreatedVehicle(vehicle)
        })
}
module.exports.createVehicleInDatabse = createVehicleInDatabse;

async function spawnCreatedVehicle(vehicle)
{
    // Vars
    let carPosition = JSON.parse(vehicle.position)
    let primaryColor = JSON.parse(vehicle.primaryColor)
    let secondaryColor = JSON.parse(vehicle.secondaryColor)

    // Created vehicle
    const createdVehicle = mp.vehicles.new(mp.joaat(vehicle.model), new mp.Vector3(carPosition.x, carPosition.y, carPosition.z),
    {
        dimension: vehicle.dimension
    });
    
    // Log action
    Logger.info(`[Game] [Vehicle] Spawned "${vehicle.model}" on world.`)

    // Set color and plate
    createdVehicle.setColorRGB(primaryColor[0], primaryColor[1], primaryColor[2], secondaryColor[0], secondaryColor[1], secondaryColor[2]);
    createdVehicle.numberPlate = vehicle.plate;

    // Log action
    Logger.info(`[Game] [Vehicle] Changed color and plate of vehicle "${vehicle.model}".`)

    /* search for attributes
    Database.vehicle.findOne({ where: {title: 'aProject'} }).then(project => {
        // project will be the first entry of the Projects table with the title 'aProject' || null
    })*/
}

/**
 * Get car data based on provided model.
 * 
 * @param {*} model 
 */
function getCarDataBasedOnModel(model) {
    for (let i = 0; i < VehicleData.carsData.length; i++) {
        if (model !== VehicleData.carsData[i].model) continue;
        return VehicleData.carsData[i];
    }

    return false;
}
module.exports.getCarDataBasedOnModel = getCarDataBasedOnModel;

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);