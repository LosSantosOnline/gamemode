'use strict'

const database = require('../database/Database')
const logger = require('../characters/CharacterLogger')

exports.loadByName = (player, characterName) => {
  database.character.findOne({
    where: { name: characterName }
  }).then(character => {
    player.character = character
    logger.info(`character ${character.name} loaded for player with name ${player.name}`)
  })
}

exports.loadById = async (player, characterId) => {
  player.character = await database.character.findById(characterId).then(character => {
    return character.dataValues
  })

  logger.info(`character ${player.character.name} loaded for player with name ${player.name}`)
}
exports.loadByIdWithData = async (player, characterId) => {
  try {
    const model = await database.character.findById(characterId, { include: [database.outfit] })
    player.character = model.dataValues
    player.character.Outfits = model.Outfits.map((outfit) => outfit.get())
    // and so on with Items and such

    logger.info(`character ${player.character.name}, loaded for player with name ${player.name}`)
  } catch (e) {
    logger.error(e)
  }
}
exports.findByAccountId = async (accountId) => {
  return database.character.findAll({
    where: { owner: accountId }
  }).then(characters => {
    return characters
  })
}
exports.saveOutfit = async (player, outfit) => {
  const name = outfit.name || 'Podstawowy'
  return database.outfit.create({
    owner: player.character.id,
    name,
    model: outfit.model,
    blends: JSON.stringify({
      shapeFirstID: outfit.shapeFirstID,
      shapeSecondID: outfit.shapeSecondID,
      skinFirstID: outfit.skinFirstID,
      skinSecondID: outfit.skinSecondID,
      shapeMix: outfit.shapeMix,
      skinMix: outfit.skinMix
    }),
    features: JSON.stringify(outfit.features),
    components: JSON.stringify(outfit.drawables),
    textures: JSON.stringify(outfit.textures),
    overlays: JSON.stringify({
      color: [outfit.overlaysColor, outfit.overlaysColor2],
      overlays: outfit.overlays
    }),
    hairColor: JSON.stringify(outfit.hairColor),
    decorations: JSON.stringify({})

  }).then(outfit => {
    return outfit
  })
}
exports.saveCharacter = async (player, exitType = null) => {
  return database.character.update({
    ...player.character,
    posX: player.position.x,
    posY: player.position.y,
    posZ: player.position.z,
    dimension: player.dimension,
    exitType
  }, {
    where: {
      id: player.character.id
    }
  })
}
