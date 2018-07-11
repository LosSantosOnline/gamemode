"use strict";

const database = require('../database/Database');
const logger = require('../characters/CharacterLogger');

exports.loadByName = (player, characterName) => {
    database.character.findOne({
        where: {name: characterName}
    }).then(character => {
        player.character = character;
        logger.info(`character ${character.name} loaded for player with name ${player.name}`);
    });
};

exports.loadById = (player, characterId) => {
    database.character.findById(characterId).then(character => {
        player.character = character;
        logger.info(`character ${character.name} loaded for player with name ${player.name}`);
    });
};

exports.findByAccountId = async (accountId) => {
    return database.character.findAll({
        where: {owner: accountId}
    }).then(characters => {
        return characters;
    })
};