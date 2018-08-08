"use strict";

const characterManager = require('../characters/CharacterManager');

function showLoginPanel (player) {
    player.call(`loginPanelAppeared`, [
        'package://LSOnline/Browsers/dist/login/index.html'
    ]);
}

mp.events.add({
    "playerJoin": async (player) => {
        player.outputChatBox("Witaj na serwerze Los Santos Online!");
        player.outputChatBox("Poczekaj chwilę, aktualnie pobierane są wszystkie zasoby serwera.");
    },

    "playerReady": async (player) => {
        showLoginPanel(player);
    },

    "loginPlayer": async (player, characterId) => {
        await characterManager.loadById(player, characterId);

        player.call(`actionDone`, [
            `Witaj na serwerze!`,
            "Zalogowałeś się po raz pierwszy na naszym serwerze. Wciśnij przycisk <b>Home</b>, " +
            "aby wyświetlić dashboard konta wraz z panelem pomocy."
        ]);
    }
});
