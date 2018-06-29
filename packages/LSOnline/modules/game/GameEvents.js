"use strict";

mp.events.add({
    "playerCommand": (player, command) => 
    {
        if (command) {
            player.call("actionDone", [
                "Wystąpił błąd",
                `Komenda nie istnieje! Potrzebujesz pomocy? Wpisz /pomoc!`
            ]);
        }
    },

    "playerChat": (player, text) => mp.players.broadcastInRange(player.position, 25, `${player.name} mówi: ${text}`)
});