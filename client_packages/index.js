const Browser = require('./LSOnline/Util/Browser');
const Camera = require('./LSOnline/Util/Camera');
const Overlay = require('./LSOnline/Util/Overlay');
const Login = require('./LSOnline/Login/Login');
const EnvironmentTime = require("./LSOnline/Environment/Time");
const PlayerEvents = require("./LSOnline/Player/PlayerEvents");
const PlayerRender = require("./LSOnline/Player/PlayerRender");
const Teleport = require('./LSOnline/Util/Teleport');
const Notification = require('./LSOnline/Notification/Notification');
const Misc = require('./LSOnline/Util/Misc');
const Keys = require("./LSOnline/Util/Keys");
const Location = require('./LSOnline/Game/Location');
const VehicleRender = require('./LSOnline/Vehicle/VehicleRender');
const VehicleEvents = require('./LSOnline/Vehicle/VehicleEvents');

mp.events.add({
  clientLaunched: () => Misc.prepareClientView(),
  render: () => mp.game.player.setHealthRechargeMultiplier(0.0)
});

mp.events.call('clientLaunched');
