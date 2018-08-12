const Command = require('../../structures/Command');
const { toggleVehicleLock } = require('../../vehicles/vehicleManager');
const { getClosestVehicleForPlayer } = require('../../vehicles/vehicleMisc');

class Close extends Command {
  constructor (...args) {
    super(...args, {
      name: 'v z',
      aliases: ['v zamknij', 'vehicle z'],
      perms: true
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
