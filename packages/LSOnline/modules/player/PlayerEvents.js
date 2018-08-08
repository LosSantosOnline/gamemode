"use strict";

const playerManager = require("../player/PlayerManager");

mp.events.add({
  playerQuit: (player, exitType, reason) => {
    playerManager.clearBrutallyWoundedTimers(player);

    let quitLabel = mp.labels.new(`~HUD_COLOUR_GREYLIGHT~ (( ${player.name} - ${exitType} ))`, new mp.Vector3(player.position.x, player.position.y, player.position.z),
      {
        los: true,
        font: 0,
        drawDistance: 10,
        dimension: player.dimension
      });

    // This need to be rewrited when we gonna create labels manager.
    setTimeout(() => {
      if (quitLabel) {
        quitLabel.destroy();
      }
    }, 30000);
  },

  playerDeath: (player, reason, killer) => {
    playerManager.setBrutallyWounded(player, reason, killer);
  },

  playerCommand: (player, command) => {
    const args = command.split(/[ ]+/);
    const commandName = args.splice(0, 1)[0];
    let subCommand = '';
    command = {
      name: commandName,
      fullText: args.toString().replace(new RegExp("[,]*,+", 'g'), ' '),
      args
    };

    let result = rp.commands.get(commandName);

    if (!result) {
      return player.call('actionDone', ['Komenda nie istnieje!', 'Podana komenda nie istnieje']);
    }

    if (result.hasSubcommands) {
      subCommand = rp.commands.get(commandName + ' ' + args[0]);
      if (subCommand) {
        result = subCommand;
        subCommand = args.splice(0, 1);
      }
    }

    if (!player.character.admin && result.perms) {
      return player.call('actionDone', ['Brak uprawnień!', 'Nie posiadasz wystarczających uprawnień do tej komendy!']);
    }

    if (player.brutallyWounded && result.restriction) {
      return player.call('actionDone', ['Nie możesz tego teraz użyć!', 'Twoja postać jest nieprzytomna lub wyciszona!']);
    }

    if (result.args.length > 0 && args.length < result.args.length) {
      const tooltip = result.args.map((element, index) => {
        if (subCommand && index === 0) {
          return `${subCommand} [${element}]`;
        } else {
          return `[${element}]`;
        }
      }).toString();
      return player.call('actionDone', ['Coś poszło nie tak!', `Użycie: /${commandName} ${tooltip.replace(',', ' ')}`]);
    }
    console.log(command);
    result.run(player, command, args);
  },

  playerChat: (player, text) => {
    if (player.brutallyWounded) {
      return player.call('actionDone', ['Nie możesz tego teraz użyć!', 'Twoja postać jest nieprzytomna!']);
    }

    mp.players.broadcastInRange(player.position, 25, player.dimension, `${player.name} mówi: ${text}`);
  }
});
