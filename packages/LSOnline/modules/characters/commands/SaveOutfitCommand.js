'use strict'

const logger = require('../CharacterLogger')
const characterManager = require('../CharacterManager')
const { parseOutfit } = require('../../utils/Helpers')

exports.execute = async (player, data) => {
  const outfit = JSON.parse(data)
  try {
    const result = await characterManager.saveOutfit(player, outfit)
    player.character.Outfits.push(parseOutfit(result.get()))
  } catch (e) {
    logger.error(e)
    return false
  }
  return true
}
