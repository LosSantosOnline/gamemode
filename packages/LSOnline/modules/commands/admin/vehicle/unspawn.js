const Command = require('../../../structures/Command.js');
const vehicleManager = require('../../../vehicles/VehicleManager');

class Unspawn extends Command {
  constructor (...args) {
    super(...args, {
      name: 'avehicle unspawn',
      aliases: ['aveh unspawn', 'av unspawn'],
      perms: true,
      args: ['ID pojazdu z gry']
    });
  }

  async run (player, command, args) {
    const vehicleId = args[0];
    const vehicle = mp.vehicles.at(vehicleId);

    if (vehicle) {
      vehicleManager.unspawn(vehicle);

      player.call('actionDone', [
        'Komendy administracyjne',
        'Pojazd ' + vehicle.informations.name + ' (ID: ' + vehicle.informations.id + ') został pomyślnie <strong>odspawnowany</strong>!'
      ]);
    } else {
      player.outputChatBox(`!{#dddddd} Użycie: /veh-unspawn [ID pojazdu z gry]`);
    }
  }
}

module.exports = Unspawn;
