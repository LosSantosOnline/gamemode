const Command = require('../../structures/Command.js');
const helpers = require('../../utils/Helpers');

class Desc extends Command {
  constructor (...args) {
    super(...args, {
      name: 'opis',
      aliases: ['desc'],
      args: ['Opis postaci - krótki, zwięzły']
    });
  }

  async run (player, command, args) {
    const fullText = command.fullText;

    if (fullText.length >= 80) {
        return player.call('actionDone', [
            'Wystąpił błąd',
            'Maksymalna liczba znaków opisu wynosi 80! Skoryguj opis i spróbuj ponownie.'
        ]);
    }

    player.setVariable('description', fullText);
  }
}

module.exports = Desc;
