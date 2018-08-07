const Command = require('../../structures/Command.js');

class Me extends Command {
  constructor (...args) {
    super(...args, {
      name: 'c',
      aliases: ['szept'],
      args: ['Tekst']
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    mp.players.broadcastInRange(player.position, 10, player.dimension, `!{#E0E0E0} ${player.name} szepcze: ${command.fullText}`);
  }
}

module.exports = Me;
