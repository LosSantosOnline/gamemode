'use strict';

// Globals
global.rp = {};

// Libs
const moment = require('moment');
const dotenv = require('dotenv');
const result = dotenv.config();
const logger = require('./modules/utils/logger');

// Config for moment
moment.locale('pl');
moment.updateLocale('pl', {
  relativeTime: {
    future: 'za %s',
    past: '%s temu',
    s: 'kilka sekund temu',
    ss: '%d sekund temu',
    m: withoutSuffix => {
      return withoutSuffix ? 'minuta temu' : 'minutę temu';
    },
    mm: '%d minut temu',
    h: withoutSuffix => {
      return withoutSuffix ? 'godzina temu' : 'godzinę temu';
    },
    hh: '%d godzin temu',
    d: 'dzień temu',
    dd: '% dni temu',
    M: 'miesiąc temu',
    MM: '%d miesięcy temu',
    y: 'rok temu',
    yy: '%d lat temu'
  }
});

// Command collection
const CommandCollection = require('./modules/structures/commandCollection');
rp.commands = new CommandCollection();

rp.config = require('../../config/server.config.json');

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
