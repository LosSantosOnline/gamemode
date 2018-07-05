"use strict";

const service = require('../auth/AuthorizationService');

mp.events.add({
    "authorizePlayer": async (player, login, password) => {
        if (service.ipbAuth(login, password)) {
            player.call("userAuthorized");
        }
    }
});