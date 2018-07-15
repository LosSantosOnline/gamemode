// --- LSOnline 2018 --- //
const Browser = require("./LSOnline/Util/Browser");
const Camera = require("./LSOnline/Util/Camera");
const Overlay = require("./LSOnline/Notification/Notification");
const Login = require("./LSOnline/Login/Login");
const Teleport = require("./LSOnline/Util/Teleport");
const Misc = require("./LSOnline/Util/Misc");
const Location = require("./LSOnline/Game/Location");
const VehicleRender = require("./LSOnline/Vehicle/VehicleRender");
const VehicleEvents = require("./LSOnline/Vehicle/VehicleEvents");

// Two events after player connect to the server
mp.events.add({
  clientLaunched: () => Misc.prepareClientView(),
  render: () => mp.game.player.setHealthRechargeMultiplier(0.0)
});

// Fire clientLaunched event
mp.events.call("clientLaunched");
