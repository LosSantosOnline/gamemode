"use strict";

module.exports = async () => {
    console.log('\x1b[36m%s\x1b[0m', '[Server] Loading commands...');

    try {
        const MeChatCommand = require("../modules/player/commands/MeChatCommand");
    }
    catch (err) {
        return console.log('\x1b[31m%s\x1b[0m', '[Server] Error while loading commands: ' + err.message + "\n" + err.stack);
    }
};