const Command = require('../../../structures/Command');
const { kill } = require('../../../player/playerManager');

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

    if (!foundPlayer) {
      return player.call('actionDone', ['Coś poszło nie tak!', 'Taki gracz nie istnieje.']);
    }

    if (foundPlayer.brutallyWounded) {
      return player.call('actionDone', ['Coś poszło nie tak!', 'Ten gracz posiada już BW.']);
    }

    kill(foundPlayer);
  }
}

module.exports = Bw;
