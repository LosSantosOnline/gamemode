"use strict";

mp.events.addCommand({
	
	"me" : (player, message) => {
		message
            ? mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} ${message}`)
            : player.outputChatBox(`!{#dddddd} Użycie: /me [Opis czynności jaką wykonałeś]`);
    },

    "do" : (player, message) => {
		message
            ? mp.players.broadcastInRange(player.position, 25, `!{#9b91ec} ** ${message} (( ${player.name} ))`)
            : player.outputChatBox(`!{#dddddd} Użycie: /do [Opis stanu, otoczenia, sytuacji]`);
    },

    "k" : (player, message) => {
		message
            ? mp.players.broadcastInRange(player.position, 35, `${player.name} krzyczy: ${message}!!`)
            : player.outputChatBox(`!{#dddddd} Użycie: /k [Krzyk]`);
    },

    "c" : (player, message) => {
		message
            ? mp.players.broadcastInRange(player.position, 10, `!{#E0E0E0} ${player.name} mówi cicho: ${message}`)
            : player.outputChatBox(`!{#dddddd} Użycie: /c [Cicho]`);
    }
})