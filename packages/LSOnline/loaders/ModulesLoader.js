"use strict";

module.exports = async () => {
    console.log('\x1b[36m%s\x1b[0m', '[Server] Loading server modules...');

    try {
        const GameBootstrap = require("../modules/game/GameBootstrap");
        const VehicleManager = require("../modules/vehicles/VehicleManager");
        const VehicleData = require("../modules/vehicles/VehicleData");
        const Login = require("../modules/auth/Login");
        const GameEvents = require("../modules/game/GameEvents");
        const AdminCommands = require("../modules/commands/AdminCommands");
        const ChatCommands = require("../modules/commands/ChatCommands");
        const VehicleCommands = require("../modules/commands/VehicleCommands");
        const MiscCommands = require("../modules/commands/MiscCommands");
        const PlayerMisc = require("../modules/player/PlayerMisc");
    }
    catch (err) {
        return console.log('\x1b[31m%s\x1b[0m', '[Server] Error while loading modules: ' + err.message + "\n" + err.stack);
    }
};