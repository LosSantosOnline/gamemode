const Command = require('../../structures/Command');
const vehicleManager = require('../../vehicles/vehicleManager');

class Close extends Command {
  constructor (...args) {
    super(...args, {
      name: 'v z',
      aliases: ['v zamknij', 'vehicle z']
    });
  }

  async run (player, command, args) {
    const vehicle = vehicleManager.getClosestVehicleForPlayer(player, 2);

    vehicle
      ? vehicleManager.toggleVehicleLock(vehicle, player)
      : player.call('actionDone', [
        'Wystąpił błąd',
        'Nie znaleziono żadnego pojazdu w pobliżu twojej postaci!'
      ]);
  }
}

module.exports = Close;
