const Command = require('../../../structures/Command.js');
const vehicleManager = require('../../../vehicles/VehicleManager');

class Vehicle extends Command {
  constructor (...args) {
    super(...args, {
      name: 'avehicle name',
      aliases: ['aveh name', 'av name'],
      perms: true,
      args: ['ID pojazdu z gry']
    });
  }

  async run (player, command, args) {
    const [vehicleId, name] = args;

    const vehicle = mp.vehicles.at(vehicleId);
    if (vehicle) {
      vehicle.informations.name = name;
      vehicleManager.updateName(vehicle.informations.id, name);

      player.call('actionDone', [
        'Komendy administracyjne',
        'Nazwa pojazdu (ID: ' + vehicle.informations.id + ') została zaktualizowana. Nowa nazwa: ' + vehicle.informations.name + '.'
      ]);
    } else {
      player.outputChatBox(`!{#dddddd} Użycie: /veh-name [ID pojazdu z gry] [Nowa nazwa pojazdu]`);
    }
  }
}

module.exports = Vehicle;
