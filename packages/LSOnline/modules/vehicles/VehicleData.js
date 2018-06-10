"use strict";

/**
 * Cars data.
 *
 * { model } - Model of car
 * { tankCapacity } - Fuel tank capacity
 * { fuelType } - Fuel type (look at fuelTypes)
 * { fuelRatio } = x litres per 100km
 */
const carsData = [
    {model: "f620", tankCapacity: 85, fuelType: 1, fuelRatio: 13.7},
    {model: "cyclone", tankCapacity: 40, fuelType: 4, fuelRatio: 3},
    {model: "windsor2", tankCapacity: 80, fuelType: 2, fuelRatio: 5},
    {model: "frogger", tankCapacity: 3000, fuelType: 3, fuelRatio: 15},
];
module.exports.carsData = carsData;

/**
 * Fuel types.
 */
const fuelTypes = [
    {type: 1, name: 'Benzyna'},
    {type: 2, name: 'LPG'},
    {type: 3, name: 'Paliwo lotnicze'},
    {type: 4, name: 'Energia elektryczna'}
];
module.exports.fuelTypes = fuelTypes;