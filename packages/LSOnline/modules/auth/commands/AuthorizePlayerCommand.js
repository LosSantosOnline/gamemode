'use strict';

const service = require('../../auth/AuthorizationService');
const accountManager = require('../../account/AccountManager');
const logger = require('../../auth/AuthorizationLogger');
const characterManager = require('../../characters/CharacterManager');

exports.execute = async (player, login, password) => {
  const chars = await characterManager.findByAccountId(1);
  player.call('userAuthorized', [JSON.stringify(chars)]);
}
;
