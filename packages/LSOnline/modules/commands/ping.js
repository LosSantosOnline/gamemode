const Command = require('../structures/Command.js');

class Ping extends Command {
  constructor (...args) {
    super(...args, {
      name: 'ping',
      aliases: ['pong']
    });
  }

  async run (player, command, args) {
    player.outputChatBox('Pong!');
  }
}

module.exports = Ping;
