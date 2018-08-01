'use strict'

const saveOutfitCommand = require('../commands/SaveOutfitCommand')

mp.events.add({
  saveOutfit: async (player, data) => {
    const success = await saveOutfitCommand.execute(player, data)
    if (success) mp.events.call('spawnCharacter', [player])
  }
})
