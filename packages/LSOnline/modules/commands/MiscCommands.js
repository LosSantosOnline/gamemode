"use strict";

// Returns player position
mp.events.addCommand("pos", (player, message) => {
    player.outputChatBox(`!{#dddddd} Pozycja: X: ${player.position.x}, Y: ${player.position.y}, Z: ${player.position.z}`)
});

// Dice command (returning random number from 1-3)
mp.events.addCommand("kostka", (player) => {
    mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} rzuca kostką i wyrzuca oczko ${randomInt(1, 6)}.`)
});

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);