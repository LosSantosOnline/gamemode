const Browser = require('./LSOnline/util/browser');
const Camera = require('./LSOnline/util/camera');
const Overlay = require('./LSOnline/util/Overlay');
const Login = require('./LSOnline/login/login');
const EnvironmentTime = require("./LSOnline/environment/time");
const PlayerEvents = require("./LSOnline/player/playerEvents");
const PlayerRender = require("./LSOnline/player/playerRender");
const Teleport = require('./LSOnline/util/teleport');
const Notification = require('./LSOnline/notification/notification');
const Misc = require('./LSOnline/util/misc');
const Keys = require("./LSOnline/util/keys");
const Location = require('./LSOnline/game/location');
const VehicleRender = require('./LSOnline/vehicle/vehicleRender');
const VehicleEvents = require('./LSOnline/vehicle/vehicleEvents');

mp.events.add({
  clientLaunched: () => Misc.prepareClientView(),
  render: () => mp.game.player.setHealthRechargeMultiplier(0.0)
});

mp.events.call('clientLaunched');
