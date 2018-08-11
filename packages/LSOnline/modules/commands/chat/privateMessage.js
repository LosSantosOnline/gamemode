const ChatCommand = require('./chatCommand');

module.exports = class extends ChatCommand {
  constructor (...args) {
    super(...args, {
      name: 'pm',
      aliases: ['w', 'pw'],
      args: ['ID lub nazwa', 'Tekst']
    });
  }

  async run (player, command, args) {
    let [receiver] = args;
    const text = super.run(player, command.args.splice(1, this.args.length).join(' '), true);
    console.log(text);
    console.log(command);
    receiver = this.searchPlayerByIdOrName(receiver);
    if (!receiver) return player.call('actionDone', ['Coś poszło nie tak..', 'Taki gracz nie istnieje.']);
    player.outputChatBox(`!{${rp.config.colors.pm}}(( >> ${receiver.name} [${receiver.id}]: ${text} ))`);
    receiver.outputChatBox(`!{${rp.config.colors.pmReceiver}}(( ${player.name} [${player.id}]: ${text} ))`);
  }
};
