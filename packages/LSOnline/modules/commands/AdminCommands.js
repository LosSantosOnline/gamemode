"use strict";

const Vehicle = require('../vehicles/Vehicle')

mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
    var weaponHash = mp.joaat(weapon);

    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
    player.call("actionDone", [
        "Komendy administracyjne",
        "Dałeś testową broń twojej postaci. Pamiętaj o tym, że nie jest to przedmiot i aby korzystać z tej komendy do testów."
    ]);
});

/**
 * Create vehicle command.
 */
mp.events.addCommand("avehicle", (player, fullText, model = "f620", color = 0, color2 = 0) => {
    
    const vehicle = Vehicle.getCarDataBasedOnModel(model)
    vehicle
        ? Vehicle.createVehicleInDatabse(player, vehicle, color, color2)
        : player.call("actionDone", [
            "Wystąpił błąd",
            "Pojazd, który próbujesz stworzyć nie istnieje lub nie został jeszcze przystosowany do rozgrywki!"
        ])
});

mp.events.addCommand("tp", (player, fullText, x, y, z) => {
    player.position = new mp.Vector3(x, y, z);
    player.call("actionDone", [
        "Komendy administracyjne",
        "Gdy teleportujesz się pamiętaj o ustawieniu dobrych koordynatów. Przy złych ustawieniach możesz się zabić."
    ]);
});