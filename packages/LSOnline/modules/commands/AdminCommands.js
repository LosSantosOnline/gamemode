"use strict";

const database = require('../database/Database');
const vehicleManager = require("../vehicles/VehicleManager");

mp.events.addCommand({
	"vehicle" : (player, fullText, modelName) => {
        if(modelName) {
            const isVehicleModelExist = vehicleManager.checkIfVehicleModelExists(modelName);

            isVehicleModelExist
                ? vehicleManager.create(player, modelName)
                : player.outputChatBox(`!{#dddddd} Użycie: /vehicle [Model pojazdu]`);
        }
        else {
            player.outputChatBox(`!{#dddddd} Użycie: /vehicle [Model pojazdu]`);
        }
    },

    "veh-unspawn" : (player, fullText, vehicleId) => {
        if(vehicleId) {
            const vehicle = mp.vehicles.at(vehicleId);

            if(vehicle) {
                vehicleManager.unspawn(vehicle);
                
                player.call("actionDone", [
                    "Komendy administracyjne",
                    "Pojazd " + vehicle.informations.name + " (ID: " + vehicle.informations.id + ") został pomyślnie <strong>odspawnowany</strong>!"
                ]);
            }
            else {
                player.outputChatBox(`!{#dddddd} Użycie: /veh-unspawn [ID pojazdu z gry]`);
            }
        }
        else {
            player.outputChatBox(`!{#dddddd} Użycie: /veh-unspawn [ID pojazdu z gry]`);
        }
    },

    "veh-name" : (player, fullText, vehicleId, name) => {
        if(vehicleId && name) {
            const vehicle = mp.vehicles.at(vehicleId);

            if(vehicle) {
                vehicle.informations.name = name;
                vehicleManager.updateName(vehicle.informations.id, name);

                player.call("actionDone", [
                    "Komendy administracyjne",
                    "Nazwa pojazdu (ID: " + vehicle.informations.id + ") została zaktualizowana. Nowa nazwa: "+ vehicle.informations.name + "."
                ]);
            }
            else {
                player.outputChatBox(`!{#dddddd} Użycie: /veh-name [ID pojazdu z gry] [Nowa nazwa pojazdu]`);
            }
        } 
        else {
            player.outputChatBox(`!{#dddddd} Użycie: /veh-name [ID pojazdu z gry] [Nowa nazwa pojazdu]`);
        }
    },

    "veh-fuel" : (player, fullText, vehicleId, fuel) => {
        if(vehicleId && fuel) {
            const vehicle = mp.vehicles.at(vehicleId);

            if(vehicle) {
                vehicle.informations.fuel = parseFloat(vehicle.informations.fuel) + parseFloat(fuel);
                vehicleManager.refuel(vehicle.informations.id, fuel);

                player.call("actionDone", [
                    "Komendy administracyjne",
                    "Stan paliwa pojazdu "+ vehicle.informations.name + " (ID: " + vehicle.informations.id + ") został pomyślnie zaktualizowany!"
                ]);
            }
            else {
                player.outputChatBox(`!{#dddddd} Użycie: /veh-fuel [ID pojazdu z gry] [Ilość dodawanego paliwa]`);
            }
        } 
        else {
            player.outputChatBox(`!{#dddddd} Użycie: /veh-fuel [ID pojazdu z gry] [Ilość dodawanego paliwa]`);
        }
    },

    "respawn" : () => {
        vehicleManager.respawnAll();
        mp.players.broadcast(`(( Respawn pojazdów! Wszystkie powróciły na swoje miejsca parkingowe. ))`) ;
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
    
    "glob" : (player, fullText) => {
		fullText
            ? mp.players.broadcast(`(( ${player.name}: ${fullText} ))`) 
            : player.outputChatBox(`!{#dddddd} Użycie: /glob [Globalna wiadomość na czacie]`);
    }
})