const Command = require('../../../structures/command');
const playerManager = require('../../../player/playerManager');

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
    const foundPlayer = this.searchPlayerByIdOrName(playerId);
    if (!foundPlayer) {
      return player.call('actionDone', ['Coś poszło nie tak..', 'Taki gracz nie istnieje.']);
    }
    if (foundPlayer.brutallyWounded) {
      return player.call('actionDone', ['Coś poszło nie tak..', 'Ten gracz posiada już BW.']);
    }
    playerManager.killPlayer(foundPlayer);
  }
}

module.exports = Bw;
