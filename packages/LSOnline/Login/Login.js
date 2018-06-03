"use strict";

function showLoginPanel(player) {
    player.call("loginPanelAppeared", ["package://RP/Browsers/Login/index.html"]);
}

mp.events.add(
    {
        "playerReady": async (player) => {
            showLoginPanel(player)
        }
    }
);