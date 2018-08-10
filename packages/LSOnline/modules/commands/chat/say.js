const ChatCommand = require('./chatCommand');

module.exports = class extends ChatCommand {
  constructor (...args) {
    super(...args, {
      name: 'say',
      aliases: ['l'],
      args: ['Tekst']
    });
  }
  // TODO: test
  async run (player, command, args) {
    const text = super.run(player, command.fullText, true);
    mp.players.forEachInRange(player.position, 15, player.dimension, (person) => {
      if (player.distSquared(person.position) > 5 && text) {
        person.outputChatBox(`!{${rp.config.colors.sayFar}}${player.name} mówi: ${text}`);
      } else {
        person.outputChatBox(`!{${rp.config.colors.say}}${player.name} mówi: ${text}`);
      }
    });
  }
};
