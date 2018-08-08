const Command = require('../../structures/Command.js');

class Global extends Command {
  constructor (...args) {
    super(...args, {
      name: 'glob',
      aliases: ['gooc'],
      perms: true
    });
  }

  async run (player, command, args) {
    mp.players.broadcast(`(( ${player.name}: ${command.fullText} ))`);
  }
}

module.exports = Global;
