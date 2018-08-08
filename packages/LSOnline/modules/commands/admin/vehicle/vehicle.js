const Command = require('../../../structures/Command.js');
const vehicleManager = require('../../../vehicles/VehicleManager');

class Vehicle extends Command {
  constructor (...args) {
    super(...args, {
      name: 'av',
      aliases: ['avehicle', 'av create'],
      perms: true,
      hasSubcommands: true,
      args: ['Model pojazdu']
    });
  }

  async run (player, command, args) {
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
