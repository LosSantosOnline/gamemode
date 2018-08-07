'use strict';

const service = require('../../auth/AuthorizationService');
const accountManager = require('../../account/AccountManager');
const logger = require('../../auth/AuthorizationLogger');
const characterManager = require('../../characters/CharacterManager');

exports.execute = async (player, login, password) => {
  await service.ipbAuth(login, password).then(() => {
    accountManager.loadAccountData(player, login).then(async (player) => {
      const chars = await characterManager.findByAccountId(player.account.id);
      player.call('userAuthorized', [JSON.stringify(chars)]);
    });
  }, (err) => {
    logger.error(err);
  });
};
