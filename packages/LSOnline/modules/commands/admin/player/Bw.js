const Command = require('../../../structures/Command.js');
const playerManager = require('../../../player/PlayerManager');

class Bw extends Command {
  constructor (...args) {
    super(...args, {
      name: 'bw',
      perms: true,
      args: ['ID gracza']
    });
  }

  async run (player, command, args) {
    const playerId = args[0];
    const foundPlayer = mp.players.at(playerId);

    foundPlayer
        ? playerManager.killPlayer(foundPlayer)
        : player.outputChatBox(`!{#dddddd} Użycie: /bw [ID gracza]`);
  }
}

module.exports = Bw;
