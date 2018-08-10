const Command = require('../../../structures/command');
const vehicleManager = require('../../../vehicles/vehicleManager');

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
    const isVehicleModelExist = vehicleManager.checkIfVehicleModelExists(modelName);
    isVehicleModelExist
      ? vehicleManager.create(player, modelName)
      : player.call('actionDone', ['Coś poszło nie tak..', `Użycie: /${command.name} ${this.tooltip}`]);
  }
}

module.exports = Vehicle;
