'use strict';

const vehicleData = require('../vehicles/vehicleData');

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
