const vehicleManager = require('../../../vehicles/VehicleManager');

const Command = require('../../../structures/Command.js');

class Vehicle extends Command {
  constructor (...args) {
    super(...args, {
      name: 'vehicle',
      aliases: ['pojazd', 'v', 'veh'],
      perms: true,
      hasSubcommands: true,
      args: ['Model pojazdu']
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    const modelName = args[0];
    console.log(modelName);
    if (args[0]) {
      const isVehicleModelExist = vehicleManager.checkIfVehicleModelExists(modelName);
      isVehicleModelExist
        ? vehicleManager.create(player, modelName)
        : player.outputChatBox(`!{#dddddd} Użycie: /${command.name} [Model pojazdu]`);
    }
  }
}

module.exports = Vehicle;
