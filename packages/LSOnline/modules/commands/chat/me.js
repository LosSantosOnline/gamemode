const ChatCommand = require('./chatCommand');

class Me extends ChatCommand {
  constructor (...args) {
    super(...args, {
      name: 'me',
      aliases: ['ja'],
      args: ['Tekst']
    });
  }

  async run (player, command, args) {
    const text = super.run(player, command.fullText, true);

    if (text) mp.players.broadcastInRange(player.position, 25, player.dimension, `!{${rp.config.colors.me}} * ${player.name} ${text}`);
  }
}

module.exports = Me;
