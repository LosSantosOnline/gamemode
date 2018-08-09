'use strict';

const logger = require('../../utils/logger');
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
    logger('authorize', `Problem z autoryzacją: ${err}`, 'error');
  });
};
