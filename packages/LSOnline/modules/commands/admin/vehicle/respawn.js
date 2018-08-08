const Command = require('../../../structures/Command.js');
const vehicleManager = require('../../../vehicles/VehicleManager');

class Respawn extends Command {
  constructor (...args) {
    super(...args, {
      name: 'respawn',
      perms: true
    });
  }

  async run (player, command, args) {
    await vehicleManager.respawnAll();
    mp.players.broadcast(`(( Respawn pojazdów! Wszystkie powróciły na swoje miejsca parkingowe. ))`);
  }
}

module.exports = Respawn;
