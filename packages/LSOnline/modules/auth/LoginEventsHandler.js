'use strict'
const characterManager = require('../characters/CharacterManager')

function showLoginPanel (player) {
  player.call(`loginPanelAppeared`, [
    'package://LSOnline/Browsers/dist/login/index.html'
  ])
}

mp.events.add({
  playerJoin: (player) => {
    player.outputChatBox('Witaj na serwerze Los Santos Online!')
    player.outputChatBox('Poczekaj chwilę, aktualnie pobierane są wszystkie zasoby serwera.')
  },
  playerReady: (player) => {
    showLoginPanel(player)
  },
  playerSelected: async (player, characterId) => {
    try {
      await characterManager.loadByIdWithData(player, characterId)
    } catch (e) {
      console.log(e)
    }
    player.setVariable('nickname', player.character.name)

    if (player.character.Outfits.length > 0) {
      mp.events.call('spawnCharacter', [player])
      return true
    }

    player.call('creationPanelAppeared', [
      'package://LSOnline/Browsers/dist/characterCreator/index.html'
    ])
  }
})
