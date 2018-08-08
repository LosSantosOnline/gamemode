const Command = require('../../../structures/Command.js');
const playerManager = require('../../../player/PlayerManager');

class Unbw extends Command {
  constructor (...args) {
    super(...args, {
      name: 'unbw',
      perms: true,
      args: ['ID gracza']
    });
  }

  async run (player, command, args) {
    const playerId = args[0];
    const foundPlayer = mp.players.at(playerId);

    foundPlayer
        ? playerManager.reviveFromBrutallyWounded(foundPlayer, true)
        : player.outputChatBox(`!{#dddddd} Użycie: /unbw [ID gracza]`);
  }
}

module.exports = Unbw;
