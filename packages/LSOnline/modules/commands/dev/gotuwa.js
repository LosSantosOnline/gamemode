const Command = require('../../structures/Command.js');

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      name: 'gotuwa',
      aliases: ['hajs']
    });
  }

  async run (player, command, args) {
    player.data.cash = args[0];
  }
};
