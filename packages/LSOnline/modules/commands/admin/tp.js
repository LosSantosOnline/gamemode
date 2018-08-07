const Command = require('../../structures/Command.js');

class Teleport extends Command {
  constructor (...args) {
    super(...args, {
      name: 'teleport',
      perms: true,
      aliases: ['tp']
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    const [x, y, z] = args;
    player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
  }
}

module.exports = Teleport;
