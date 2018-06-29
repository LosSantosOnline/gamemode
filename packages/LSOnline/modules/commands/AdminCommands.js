"use strict";

const vehicleManager = require("../vehicles/VehicleManager");

mp.events.addCommand({
	
	"vehicle" : (player, fullText, modelName = "turismor") => {
		vehicleManager.create(player, modelName, [0, 0, 0], [0, 0, 0]);
    },

    "weapon" : (player, fullText, weapon = "weapon_compactrifle", ammo) => {
        const weaponHash = mp.joaat(weapon);

        player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
        player.call("actionDone", [
            "Komendy administracyjne",
            "Dałeś testową broń twojej postaci. Pamiętaj o tym, że nie jest to przedmiot i aby korzystać z tej komendy do testów."
        ]);
    },

    "tp" : (player, fullText, x, y, z) => {
		player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
    },
    
    "glob" : (player, message) => {
		message
            ? mp.players.broadcast(`(( ${player.name}: ${message} ))`) 
            : player.outputChatBox(`!{#dddddd} Użycie: /glob [Globalna wiadomość na czacie]`);
    }
})