"use strict";

function execute(player, fullText) {
    fullText
        ? mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} ${fullText}`)
        : player.outputChatBox(`!{#dddddd} Użycie: /me [Opis czynności jaką wykonałeś]`);
}

exports.execute = execute;