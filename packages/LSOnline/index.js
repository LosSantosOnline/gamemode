'use strict';

// Globals
global.rp = {};

// Libs
const dotenv = require('dotenv');
const result = dotenv.config();
const logger = require('./modules/utils/logger');

// Command collection
const CommandCollection = require('./modules/structures/CommandCollection');
rp.commands = new CommandCollection();

// Load server gamemode async
(async () => {
  await require('./loaders/databaseLoader')();

  await require('./loaders/eventHandlersLoader')();

  await require('./loaders/commandsLoader')();

  await require('./loaders/clientProvidersLoader')();

  await require('./loaders/bootstrapLoader.js')();

  // Loading complete
  logger('server', 'Loading complete... server is ready!', 'info');
})();

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
