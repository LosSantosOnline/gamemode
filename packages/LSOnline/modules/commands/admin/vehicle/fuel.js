
const vehicleManager = require('../../../vehicles/VehicleManager');

const Command = require('../../../structures/Command.js');

class Fuel extends Command {
  constructor (...args) {
    super(...args, {
      name: 'vehicle fuel',
      aliases: ['pojazd paliwo', 'v fuel', 'veh fuel'],
      perms: true,
      args: ['ID pojazdu z gry', 'Ilość dodanego paliwa']
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    const [vehicleId, fuel] = args;
    const vehicle = mp.vehicles.at(vehicleId);

    if (vehicle) {
      vehicle.informations.fuel = parseFloat(vehicle.informations.fuel) + parseFloat(fuel);
      vehicleManager.refuel(vehicle.informations.id, fuel);

      player.call('actionDone', [
        'Komendy administracyjne',
        'Stan paliwa pojazdu ' + vehicle.informations.name + ' (ID: ' + vehicle.informations.id + ') został pomyślnie zaktualizowany!'
      ]);
    } else {
      player.outputChatBox(`!{#dddddd} Użycie: /veh-fuel [ID pojazdu z gry] [Ilość dodawanego paliwa]`);
    }
  }
}

module.exports = Fuel;
