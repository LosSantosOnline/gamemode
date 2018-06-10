// --- LSOnline 2018 --- //

const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
    throw result.error;
}

// Basic (database, server utils)
const Logger = require("./modules/utils/Logger");
const Database = require("./modules/database/Database");

// Commands
const AdminCommands = require("./modules/commands/AdminCommands");
const ChatCommands = require("./modules/commands/ChatCommands");
const MiscCommands = require("./modules/commands/MiscCommands");

// Authorization
const Login = require("./modules/auth/Login");

// Vehicles
const VehicleManager = require("./modules/vehicles/VehicleManager");
const VehicleData = require("./modules/vehicles/VehicleData");

const GameBootstrap = require("./modules/game/GameBootstrap");