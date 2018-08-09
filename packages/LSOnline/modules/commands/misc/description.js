const Command = require('../../structures/Command');
const helpers = require('../../utils/Helpers');

class Description extends Command {
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

module.exports = Description;
