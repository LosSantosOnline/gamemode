"use strict";

// --- Libs --- //
const dotenv = require('dotenv');
const result = dotenv.config();

// --- Load server gamemode async --- //
(async () => {
    
    // Loading globals
    await require('./loaders/GlobalsLoader.js')();

    await require('./loaders/CommandsLoader')();

    // Loading modules
    await require('./loaders/ModulesLoader.js')();

    // Loading complete
    console.log('\x1b[36m%s\x1b[0m', '[Server] Loading complete.. Server ready!');
})();