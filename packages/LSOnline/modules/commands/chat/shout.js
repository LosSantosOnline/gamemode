const Command = require('../../structures/Command');

class Shout extends Command {
  constructor (...args) {
    super(...args, {
      name: 'k',
      aliases: ['krzyk'],
      args: ['Tekst']
    });
  }

  async run (player, command, args) {
    mp.players.broadcastInRange(player.position, 35, player.dimension, `${player.name} krzyczy: ${command.fullText}!!`);
  }
}

module.exports = Shout;
