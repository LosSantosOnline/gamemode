"use strict";

module.exports = async () => {
    console.log('\x1b[36m%s\x1b[0m', '[Server] Loading account files...');

    try {
        const AccountManager = require("../modules/account/AccountManager");
    }
    catch (err) {
        return console.log('\x1b[31m%s\x1b[0m', '[Server] Error while loading modules: ' + err.message + "\n" + err.stack);
    }
};