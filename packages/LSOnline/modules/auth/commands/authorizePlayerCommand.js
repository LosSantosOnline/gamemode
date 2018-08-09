'use strict';

const logger = require('../../auth/authorizationLogger');
const service = require('../../auth/authorizationService');
const accountManager = require('../../account/accountManager');
const characterManager = require('../../characters/characterManager');

exports.execute = async (player, login, password) => {
  await service.ipbAuth(login, password).then(() => {
    accountManager.loadAccountData(player, login).then(async () => {
      const chars = await characterManager.findByAccountId(player.account.id);
      player.call('userAuthorized', [JSON.stringify(chars)]);
    });
  }, (err) => {
    logger.error(err);
  });
};
