"use strict";

const logger = require('../utils/logger');
const database = require('../database/database');

exports.loadByName = (player, characterName) => {
  database.character.findOne({
    where: {name: characterName}
  }).then(character => {
    player.character = character;
    logger('authorization', `Character ${character.name} loaded for player with name ${player.name}!`, 'info');
  });
};

exports.loadById = async (player, characterId) => {
  player.character = await database.character.findById(characterId).then(character => {
    return character.dataValues;
  });

  logger('authorization', `Character ${player.character.name} loaded for player with name ${player.name}!`, 'info');
};

exports.findByAccountId = async (accountId) => {
  return database.character.findAll({
    where: {owner: accountId}
  }).then(characters => {
    return characters;
  });
};
