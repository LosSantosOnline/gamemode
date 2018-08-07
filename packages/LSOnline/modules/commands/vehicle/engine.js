const Command = require('../../structures/Command.js');
const playerMisc = require('../../player/PlayerMisc');
const vehicleManager = require('../../vehicles/VehicleManager');
const helpers = require('../../utils/Helpers');

class Engine extends Command {
  constructor (...args) {
    super(...args, {
      name: 'engine',
      aliases: ['silnik']

    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    if (playerMisc.isVehicleDriver(player)) {
      const actionType = player.vehicle.engine ? 'gasi' : 'odpala';

      mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} ${actionType} silnik pojazdu ${helpers.upperString(player.vehicle.informations.name)}.`);
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
