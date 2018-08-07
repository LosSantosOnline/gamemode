
const Command = require('../../structures/Command.js');

class Glob extends Command {
  constructor (...args) {
    super(...args, {
      name: 'glob',
      aliases: ['gooc'],
      perms: true
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    mp.players.broadcast(`(( ${player.name}: ${command.fullText} ))`);
  }
}

module.exports = Glob;
