"use strict";

const logger = require('../utils/logger');
const characterManager = require('../characters/characterManager');

mp.events.add({
  playerJoin: async player => {
    logger('join', `Player ${player.name} (SC: ${player.socialClub} / IP: ${player.ip}) joined to the server.`, 'info');
  },

  playerReady: async player => {
    prepareBeforeJoin(player);
    showLoginPanel(player);
    setTimeout(() => {
      if (!player.isLogged) {
        player.kick('Byłeś zbyt długo w lobby!');
        logger('authorization', `Player ${player.name} (SC: ${player.socialClub} / IP: ${player.ip}) has been in login lobby too long.`, 'info');
      }
    }, 60000);
  },

  loginPlayer: async (player, characterId) => {
    await characterManager.loadAndSpawnCharacter(player, characterId);
    proceedToGame(player);
  }
});

const showLoginPanel = player => {
  player.call(`loginPanelAppeared`, [
    'package://LSOnline/browser/dist/login/index.html'
  ]);
};

const prepareBeforeJoin = player => {
  player.dimension = 2137;
  player.call(`disableChat`, true);
  player.call(`setInvincible`, true);
};

const proceedToGame = player => {
  player.call(`setInvincible`, false);
  player.call(`disableChat`, false);
  player.call(`clearChat`);

  player.outputChatBox(`Witaj ponownie, ${player.account.name}. Życzymy miłej rozgrywki na serwerze!`);
};
