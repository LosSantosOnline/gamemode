"use strict";

const VehicleManager = require("../vehicles/VehicleManager");

mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
    let weaponHash = mp.joaat(weapon);

    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
    player.call("actionDone", [
        "Komendy administracyjne",
        "Dałeś testową broń twojej postaci. Pamiętaj o tym, że nie jest to przedmiot i aby korzystać z tej komendy do testów."
    ]);
});

mp.events.addCommand("vehicle", (player, fullText, modelName = "turismor", plate = "ADMIN") => {
    VehicleManager.create(player, modelName, [0, 0, 0], [0, 0, 0]);
});

mp.events.addCommand("tp", (player, fullText, x, y, z) => {
    player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
    player.call("actionDone", [
        "Komendy administracyjne",
        "Gdy teleportujesz się pamiętaj o ustawieniu dobrych koordynatów. Przy złych ustawieniach możesz się zabić."
    ]);
});