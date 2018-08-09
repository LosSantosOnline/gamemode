const Command = require('../../structures/Command');

class Vw extends Command {
  constructor (...args) {
    super(...args, {
      name: 'vw',
      aliases: ['virtualworld']
    });
  }

  async run (player, command, args) {
    player.outputChatBox(`!{#dddddd} Aktualny VW: ${player.dimension}`);
  }
}

module.exports = Vw;
