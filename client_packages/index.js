// --- LSOnline 2018 --- //
const Browser = require("./LSOnline/Util/Browser")
const Camera = require("./LSOnline/Util/Camera")
const Notification = require("./LSOnline/Notification/Notification")
const Login = require("./LSOnline/Login/Login")
const Teleport = require("./LSOnline/Util/Teleport")
const Misc = require("./LSOnline/Util/Misc")

// Addons
require('nativeui');
require('charcreator');

// MapEditor
require("MapEditor/MapEditor.js");
require("MapEditor/object_data.js");
require("MapEditor/Natives.js");

// Two events after player connect to the server
mp.events.add({
    'clientLaunched': () => Misc.preparePlayerClient(),
    'render': () => mp.game.player.setHealthRechargeMultiplier(0.0)
});

// Fire clientLaunched event
mp.events.call("clientLaunched");