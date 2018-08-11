const Command = require('../../structures/Command');

class Me extends Command {
  constructor (...args) {
    super(...args, {
      name: 'c',
      aliases: ['szept'],
      args: ['Tekst'],
      perms: true
    });
  }

  async run (player, command, args) {
    mp.players.broadcastInRange(player.position, 10, player.dimension, `!{#E0E0E0} ${player.name} szepcze: ${command.fullText}`);
  }
}

module.exports = Me;
