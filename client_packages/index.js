// Chat
require('./LSOnline/chat/events');

// Authorization
require('./LSOnline/login/login');

// CEF, etc.
require('./LSOnline/util/camera');
require('./LSOnline/util/browser');
require('./LSOnline/util/overlay');
require('./LSOnline/notification/notification');

// Environment
require("./LSOnline/environment/time");

// Keybinds
require("./LSOnline/keybinds/keyE");
require("./LSOnline/keybinds/keyZ");
require("./LSOnline/keybinds/keyY");
require("./LSOnline/keybinds/keyF2");
require("./LSOnline/keybinds/keyAltTab");
require("./LSOnline/keybinds/keyNumpad5");
require("./LSOnline/keybinds/keyNumpad8");

// Player
require("./LSOnline/player/playerEvents");
require("./LSOnline/player/playerRender");

// Vehicles
require('./LSOnline/vehicle/vehicleRender');
require('./LSOnline/vehicle/vehicleEvents');

// Customs
require('./LSOnline/util/teleport');
require('./LSOnline/game/location');

const misc = require('./LSOnline/util/misc');

mp.events.add({
  clientLaunched: () => misc.prepareClientView(),
  render: () => mp.game.player.setHealthRechargeMultiplier(0.0)
});

mp.events.call('clientLaunched');
