const Command = require('../../structures/command');
const { toggleVehicleLock } = require('../../vehicles/vehicleManager');
const { getClosestVehicleForPlayer } = require('../../vehicles/vehicleMisc');

class Close extends Command {
  constructor (...args) {
    super(...args, {
      name: 'v z',
      subcommandOf: 'v',
      aliases: ['v zamknij', 'vehicle z']
    });
  }

  async run (player, command, args) {
    const vehicle = getClosestVehicleForPlayer(player, 2);

    vehicle
      ? toggleVehicleLock(vehicle, player)
      : player.call('actionDone', [
        'Coś poszło nie tak!',
        'Nie znaleziono żadnego pojazdu w pobliżu twojej postaci!'
      ]);
  }
}

module.exports = Close;
