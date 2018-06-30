"use strict";

const database = require('../database/Database');
const logger = require('../vehicles/VehicleLogger');

function loadByName(player, characterName) {
    database.character.findOne({
        where: {name: characterName}
    }).then(character => {
        player.character = character;
        logger.info(`character ${character.name} loaded for player with name ${player.name}`);
    });
}

exports.loadByName = loadByName;