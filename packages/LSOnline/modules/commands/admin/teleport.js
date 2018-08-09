const Command = require('../../structures/Command');

class Teleport extends Command {
  constructor (...args) {
    super(...args, {
      name: 'teleport',
      perms: true,
      aliases: ['tp']
    });
  }

  async run (player, command, args) {
    const [x, y, z] = args;
    player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
  }
}

module.exports = Teleport;
