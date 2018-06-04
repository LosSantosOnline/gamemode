"use strict";

function showLoginPanel(player) {
    console.log(`showing login panel`);
    player.call(`loginPanelAppeared`, ["package://LSOnline/Browsers/Login/index.html"]);
}

mp.events.add(
    {
        "playerReady": async (player) => {
            player.call(`testEvent`, [`${player.name} is ready`]);
            console.log(`Player ${player.name} ready`);
            showLoginPanel(player);
            console.log(`Panel showed`);
        },
        "loginPlayer": async (player, password) => {
            console.log(`${player.name} trying to login with password ${password}`);
            player.call(`actionDone`, [
                "Witaj na serwerze!",
                "Zalogowałeś się po raz pierwszy na naszym serwerze. Wciśnij przycisk <b>Home</b>, " +
                "aby wyświetlić dashboard konta wraz z panelem pomocy."
            ]);
        }
    }
);