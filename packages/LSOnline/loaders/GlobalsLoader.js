"use strict";

module.exports = async () => {
    console.log('\x1b[36m%s\x1b[0m', '[Server] Loading server globals...');

    try {
        const Logger = require("../modules/utils/Logger");
        const Database = require("../modules/database/Database");
        const Helpers = require("../modules/utils/Helpers");
    }
    catch (err) {
        console.log('\x1b[31m%s\x1b[0m', '[Server] Error while loading globals: ' + err.message + "\n" + err.stack);
    }
};