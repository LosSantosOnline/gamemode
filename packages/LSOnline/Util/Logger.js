"use strict";

const log4js = require('log4js');
log4js.configure({
    appenders: {
        file: { type: 'file', filename: `serverLogs.log` },
        console: { type: 'console' },
    },
    categories: { default: { appenders: ['file', 'console'], level: 'debug' } }
});

const log = log4js.getLogger();

log.info("Server Started");
exports.log = log;