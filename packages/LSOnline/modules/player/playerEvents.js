'use strict';

const { setBrutallyWounded, clearBrutallyWoundedTimers } = require('../player/playerManager');

mp.events.add({
  playerQuit: (player, exitType, reason) => {
    prepareBeforeQuit(player, exitType);
    createQuitLabel(player, exitType);
  },

  playerDeath: (player, reason, killer) => {
    setBrutallyWounded(player, reason, killer);
  },

  playerCommand: (player, command) => {
    const args = command.split(/[ ]+/);
    const commandName = args.splice(0, 1)[0];
    let subCommand = '';

    let result = rp.commands.get(commandName);

    if (!player.isLogged) {
      return player.kick();
    }

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
    // TODO: rework to flags
    /* if (!result.perms) {
      return player.call('actionDone', ['Brak uprawnień!', 'Nie posiadasz wystarczających uprawnień do tej komendy!']);
    }
    */
    if (player.brutallyWounded && result.restriction) {
      return player.call('actionDone', ['Nie możesz tego teraz użyć!', 'Twoja postać jest nieprzytomna lub wyciszona!']);
    }

    if (result.args.length > 0 && args.length < result.args.length) {
      return player.call('actionDone', ['Coś poszło nie tak!', `Użycie: /${commandName} ${result.tooltip.replace(',', ' ')}`]);
    }

    result.run(player, {
      name: subCommand ? `${commandName} ${subCommand}` : commandName,
      fullText: args.toString().replace(new RegExp('[,]*,+', 'g'), ' '),
      args
    }, args);
  },

  playerChat: (player, text) => {
    if (!player.isLogged) {
      return player.kick();
    }

    if (player.brutallyWounded) {
      return player.call('actionDone', ['Nie możesz tego teraz użyć!', 'Twoja postać jest nieprzytomna!']);
    }

    mp.players.broadcastInRange(player.position, 25, player.dimension, `${player.name} mówi: ${text}`);
  }
});

const createQuitLabel = (player, exitType) => {
  if (!player.quitLabel) {
    player.quitLabel = mp.labels.new(`~HUD_COLOUR_GREYLIGHT~ (( ${player.name} - ${exitType} ))`, new mp.Vector3(player.position.x, player.position.y, player.position.z),
      {
        los: true,
        font: 0,
        drawDistance: 10,
        dimension: player.dimension
      });
  }

  // This need to be rewrited when we gonna create labels manager.
  setTimeout(() => {
    if (player.quitLabel) {
      player.quitLabel.destroy();
    }
  }, 50000);
};

const prepareBeforeQuit = (player, exitType = false) => {
  clearBrutallyWoundedTimers(player);

  if (player.vehicle) {
    const vehicle = { id: player.vehicle.informations.id, seat: player.seat };
    player.character.saveBeforeQuit(player, vehicle, exitType);
  } else {
    player.character.saveBeforeQuit(player, undefined, exitType);
  }
};

exports.prepareBeforeQuit = prepareBeforeQuit;
