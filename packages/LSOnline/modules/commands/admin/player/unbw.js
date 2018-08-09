const Command = require('../../../structures/Command');
const playerManager = require('../../../player/playerManager');

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
    if (!foundPlayer) {
      return player.call('actionDone', ['Coś poszło nie tak..', 'Taki gracz nie istnieje.']);
    }
    if (!foundPlayer.brutallyWounded) {
      return player.call('actionDone', ['Coś poszło nie tak..', 'Ten gracz nie posiada BW.']);
    }
    playerManager.reviveFromBrutallyWounded(foundPlayer, true);
  }
}

module.exports = Unbw;