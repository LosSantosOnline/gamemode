const Command = require('../../structures/Command');
const playerMisc = require('../../player/playerMisc');

class VehicleDescription extends Command {
  constructor (...args) {
    super(...args, {
      name: 'v opis',
      aliases: ['v desc'],
      args: ['Opis pojazdu - krótki, zwięzły'],
      perms: true
    });
  }

  async run (player, command, args) {
    const fullText = command.fullText;

    if (playerMisc.isVehicleDriver(player)) {
      if (fullText.length >= 80) {
        return player.call('actionDone', [
          'Wystąpił błąd',
          'Maksymalna liczba znaków opisu pojazdu wynosi 80! Skoryguj opis i spróbuj ponownie.'
        ]);
      }

      player.vehicle.setVariable('description', fullText);
    } else {
      player.call('actionDone', [
        'Wystąpił błąd',
        'Musisz być w pojeździe jako kierowca, aby móc ustawić opis pojazdu!'
      ]);
    }
  }
}

module.exports = VehicleDescription;
