"use strict";
const meChatCommand = require('../player/commands/MeChatCommand');

mp.events.addCommand({

    "me": meChatCommand.execute,

      "do" : (player, fullText) => {
            fullText
                  ? mp.players.broadcastInRange(player.position, 25, `!{#9b91ec} ** ${fullText} (( ${player.name} ))`)
                  : player.outputChatBox(`!{#dddddd} Użycie: /do [Opis stanu, otoczenia, sytuacji]`);
      },

      "k" : (player, fullText) => {
            fullText
                  ? mp.players.broadcastInRange(player.position, 35, `${player.name} krzyczy: ${fullText}!!`)
                  : player.outputChatBox(`!{#dddddd} Użycie: /k [Krzyk]`);
      },

      "c" : (player, fullText) => {
            fullText
                  ? mp.players.broadcastInRange(player.position, 10, `!{#E0E0E0} ${player.name} mówi cicho: ${fullText}`)
                  : player.outputChatBox(`!{#dddddd} Użycie: /c [Cicho]`);
      }
})