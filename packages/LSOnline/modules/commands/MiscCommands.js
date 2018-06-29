"use strict";

const helpers = require("../utils/Helpers");

mp.events.addCommand({
	"position" : (player) => {
        player.outputChatBox(`!{#dddddd} Pozycja: X: ${player.position.x}, Y: ${player.position.y}, Z: ${player.position.z}`);
    },

    "kostka" : (player) => {
        mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} rzuca kostką i wyrzuca oczko ${helpers.randomInt(1, 6)}.`);
    },
})