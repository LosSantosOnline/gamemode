// Chat
const chatEvents = require('./LSOnline/chat/events');

// Authorization
const login = require('./LSOnline/login/login');

// CEF, etc.
const camera = require('./LSOnline/util/camera');
const browser = require('./LSOnline/util/browser');
const Overlay = require('./LSOnline/util/overlay');
const notification = require('./LSOnline/notification/notification');

// Environment
const envTime = require('./LSOnline/environment/time');

// Keybinds
const keyE = require('./LSOnline/keybinds/keyE');
const keyZ = require('./LSOnline/keybinds/keyZ');
const keyY = require('./LSOnline/keybinds/keyY');
const keyF2 = require('./LSOnline/keybinds/keyF2');
const keyAltTab = require('./LSOnline/keybinds/keyAltTab');
const keyNumpad5 = require('./LSOnline/keybinds/keyNumpad5');
const keyNumpad8 = require('./LSOnline/keybinds/keyNumpad8');

// Player
const playerEvents = require('./LSOnline/player/playerEvents');
const playerRender = require('./LSOnline/player/playerRender');

// Vehicles
const vehicleRender = require('./LSOnline/vehicle/vehicleRender');
const vehicleEvents = require('./LSOnline/vehicle/vehicleEvents');

// Customs
const location = require('./LSOnline/game/location');
const { prepareClientView } = require('./LSOnline/util/misc');

mp.events.add({
  clientLaunched: () => prepareClientView(),
  render: () => mp.game.player.setHealthRechargeMultiplier(0.0)
});

mp.events.call('clientLaunched');
