const Command = require('../../structures/Command');

class Vehicle extends Command {
  constructor (...args) {
    super(...args, {
      name: 'v',
      aliases: ['v', 'vehicle', 'pojazd'],
      hasSubcommands: true,
      args: [],
      perms: true
    });
  }

  async run (player, command, args) {
    player.outputChatBox('todo');
  }
}

module.exports = Vehicle;
