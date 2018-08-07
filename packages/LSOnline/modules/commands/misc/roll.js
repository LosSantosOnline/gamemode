const Command = require('../../structures/Command.js');
const helpers = require('../../utils/Helpers');

class Roll extends Command {
  constructor (...args) {
    super(...args, {
      name: 'roll',
      aliases: ['kostka']

    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} rzuca kostką i wyrzuca oczko ${helpers.randomInt(1, 6)}.`);
  }
}

module.exports = Roll;
