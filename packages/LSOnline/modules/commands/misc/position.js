const Command = require('../../structures/Command.js');

class Position extends Command {
  constructor (...args) {
    super(...args, {
      name: 'pos',
      aliases: ['position']
    });
  }

  async run (player, command, args) {
    player.outputChatBox(`!{#dddddd} Pozycja: X: ${player.position.x}, Y: ${player.position.y}, Z: ${player.position.z}`);
  }
}

module.exports = Position;
