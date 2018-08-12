const Command = require('../../structures/Command');
const { setDescription } = require('../../player/playerManager');

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
        'Coś poszło nie tak!',
        'Maksymalna liczba znaków opisu wynosi 80! Skoryguj opis i spróbuj ponownie.'
      ]);
    }

    setDescription(player, fullText);
  }
}

module.exports = Description;
