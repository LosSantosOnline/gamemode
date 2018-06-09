"use strict";

// Action (me) command
mp.events.addCommand("me", (player, message) => {
    message
        ? mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} ${message}`)
        : player.outputChatBox(`!{#dddddd} Użycie: /me [Opis czynności jaką wykonałeś]`)
});

// Action (do) command
mp.events.addCommand("do", (player, message) => {
    message
        ? mp.players.broadcastInRange(player.position, 25, `!{#9b91ec} ** ${message} (( ${player.name} ))`)
        : player.outputChatBox(`!{#dddddd} Użycie: /do [Opis stanu, otoczenia, sytuacji]`)
});

// Shout as player (k) command
mp.events.addCommand("k", (player, message) => {
    message
        ? mp.players.broadcastInRange(player.position, 35, `${player.name} krzyczy: ${message}!!`)
        : player.outputChatBox(`!{#dddddd} Użycie: /k [Krzyk]`)
});

// Tell something quietly (c) command
mp.events.addCommand("c", (player, message) => {
    message
        ? mp.players.broadcastInRange(player.position, 10, `!{#E0E0E0} ${player.name} mówi cicho: ${message}`)
        : player.outputChatBox(`!{#dddddd} Użycie: /c [Cicho]`)
});

// Global command
mp.events.addCommand("glob", (player, message) => {
    message
        ? mp.players.broadcast(`(( ${player.name}: ${message} ))`) 
        : player.outputChatBox(`!{#dddddd} Użycie: /glob [Globalna wiadomość na czacie]`)
});

// Normal player chat
mp.events.add(
    {
        "playerChat": async (player, text) => mp.players.broadcastInRange(player.position, 25, `${player.name} mówi: ${text}`)
    }
);