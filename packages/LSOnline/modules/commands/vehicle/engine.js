const Command = require('../../structures/Command');
const playerMisc = require('../../player/playerMisc');
const vehicleManager = require('../../vehicles/vehicleManager');

class Engine extends Command {
  constructor (...args) {
    super(...args, {
      name: 'engine',
      aliases: ['silnik'],
      perms: true
    });
  }

  async run (player, command, args) {
    if (playerMisc.isVehicleDriver(player)) {
      const actionType = player.vehicle.engine ? 'gasi' : 'odpala';

      mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} ${actionType} silnik pojazdu ${player.vehicle.informations.name}.`);
      setTimeout(() => vehicleManager.toggleVehicleEngine(player.vehicle), player.vehicle.engine ? 0 : 1500);
    } else {
      player.call('actionDone', [
        'Wystąpił błąd',
        'Musisz być w pojeździe jako kierowca, aby móc uruchomić silnik!'
      ]);
    }
  }
}

module.exports = Engine;
