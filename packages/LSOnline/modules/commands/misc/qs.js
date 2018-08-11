const Command = require('../../structures/Command.js');

class Qs extends Command {
  constructor (...args) {
    super(...args, {
      name: 'qs',
      aliases: ['qs'],
      perms: true
    });
  }

  async run (player, command, args) {
    player.kick('/qs');
  }
}

module.exports = Qs;
