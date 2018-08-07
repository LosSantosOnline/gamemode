'use strict';

// --- Libs --- //
const dotenv = require('dotenv');
const result = dotenv.config();

global.rp = {};

const CommandCollection = require('./modules/structures/CommandCollection');

rp.commands = new CommandCollection();

// --- Load server gamemode async --- //
(async () => {
  await require('./loaders/DatabaseLoader')();

  await require('./loaders/EventHandlersLoader')();

  await require('./loaders/CommandsLoader')();

  await require('./loaders/ClientProvidersLoader')();

  await require('./modules/game/GameBootstrap.js');

  // Loading complete
  console.log('\x1b[36m%s\x1b[0m', '[Server] Loading complete.. Server ready!');
})();
