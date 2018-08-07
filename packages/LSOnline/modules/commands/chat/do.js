const Command = require('../../structures/Command.js');

class Me extends Command {
  constructor (...args) {
    super(...args, {
      name: 'do',
      args: ['Tekst']
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    mp.players.broadcastInRange(player.position, 25, player.dimension, `!{#dca2f4} * ${player.name} ${command.fullText}`);
  }
}

module.exports = Me;
