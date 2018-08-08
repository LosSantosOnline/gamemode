// Get logger
const log4js = require('log4js');

// Configuration logger
log4js.configure({
    appenders: {
        file: { type: 'file', filename: `logs/server.log` },
        console: { type: 'console' }
    },
    categories: { default: { appenders: ['file', 'console'], level: 'debug' } }
});

// Get logger instance and export
const log = log4js.getLogger();
module.exports = log;
