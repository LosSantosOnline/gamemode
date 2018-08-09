'use strict';

// Globals
global.rp = {};

// Libs
const dotenv = require('dotenv');
const result = dotenv.config();

// Command collection
const CommandCollection = require('./modules/structures/CommandCollection');
rp.commands = new CommandCollection();

// Load server gamemode async
(async () => {
  await require('./loaders/databaseLoader')();

  await require('./loaders/eventHandlersLoader')();

  await require('./loaders/commandsLoader')();

  await require('./loaders/clientProvidersLoader')();

  await require('./modules/game/gameBootstrap.js');

  // Loading complete
  console.log('\x1b[36m%s\x1b[0m', '[Server] Loading complete.. Server ready!');
})();
