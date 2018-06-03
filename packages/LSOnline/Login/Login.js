"use strict";

const logger = require("../Util/Logger");

function showLoginPanel(player) {
    console.log(`showing login panel`);
    player.call(`loginPanelAppeared`, ["package://LSOnline/Browsers/Login/index.html"]);
}

mp.events.add(
    {
        "playerReady": async (player) => {
            player.call(`testEvent`, [`${player.name} is ready`]);
            console.log(`Player ${player.name} ready`);
            logger.log.debug(`Player ${player.name} ready`);
            showLoginPanel(player);
            console.log(`Panel showed`);
        }
    }
);