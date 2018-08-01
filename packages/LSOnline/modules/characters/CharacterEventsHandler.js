'use strict'

mp.events.add({
  spawnCharacter: (player) => {
    // spawn -> give all variables to ped and set position
    // clothes and such

    player.position = new mp.Vector3(player.character.posX, player.character.posY, player.character.posZ)
    player.dimension = player.character.dimension

    // todo: spawn w budynku/spawn bez budynku
    // check for default spawn
    // if not above, spawn at random spawn from the pool
  }
})
