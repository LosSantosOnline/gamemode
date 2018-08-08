"use strict";

const upperString = string => string.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase());

exports.upperString = upperString;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

exports.randomInt = randomInt;
