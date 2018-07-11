"use strict";

const service = require('../auth/AuthorizationService');
const accountManager = require('../account/AccountManager');

mp.events.add({
    "authorizePlayer": async (player, login, password) => {
        if (service.ipbAuth(login, password)) {
            await accountManager.loadAccountData(player, login).then((player) => {
                player.call("userAuthorized");
            });
        }
    }
});