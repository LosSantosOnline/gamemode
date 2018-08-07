
const vehicleManager = require('../../../vehicles/VehicleManager');

const Command = require('../../../structures/Command.js');

class Respawn extends Command {
  constructor (...args) {
    super(...args, {
      name: 'respawn',
      perms: true
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    vehicleManager.respawnAll();
    mp.players.broadcast(`(( Respawn pojazdów! Wszystkie powróciły na swoje miejsca parkingowe. ))`);
  }
}

module.exports = Respawn;
