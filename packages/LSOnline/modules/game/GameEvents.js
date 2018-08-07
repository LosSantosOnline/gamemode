'use strict';

mp.events.add({
  playerCommand: (player, command) => {
    const args = command.split(/[ ]+/);
    const commandName = args.splice(0, 1)[0];
    command = {
      name: commandName,
      fullText: args.toString().replace(',', ' '),
      args
    };

    let result = rp.commands.get(commandName);

    if (!result) {
      return player.call('actionDone', ['Komenda nie istnieje!', 'Podana komenda nie istnieje']);
    }
    if (result.hasSubcommands) {
      const subCommand = rp.commands.get(commandName + ' ' + args[0]);
      if (subCommand) {
        result = subCommand;
        args.splice(0, 1);
      }
    }
    console.log(result);

    if (!player.character.admin && result.perms) {
      return player.call('actionDone', ['Brak uprawnień!', 'Nie posiadasz wystarczających uprawnień do tej komendy']);
    }
    if (player.brutallyWounded && result.restriction) {
      return player.call('actionDone', ['Nie możesz tego teraz użyć!', 'Twoja postać jest nieprzytomna lub wyciszona']);
    }
    if (result.args.length > 0 && args.length < result.args.length) {
      const tooltip = result.args.map(element => { return `[${element}]`; }).toString();
      return player.call('actionDone', ['Coś poszło nie tak..', `UŻYCIE: /${commandName} ${tooltip.replace(',', ' ')}`]);
    }

    result.run(player, command, args);
  },

  playerChat: (player, text) => mp.players.broadcastInRange(player.position, 25, player.dimension, `${player.name} mówi: ${text}`)
});
