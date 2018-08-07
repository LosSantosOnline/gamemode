'use strict';

module.exports = async () => {
  console.log('\x1b[36m%s\x1b[0m', '[Server] Loading server database...');

  try {
    require('../modules/database/Database');

    console.log('\x1b[36m%s\x1b[0m', '[Server] Loaded server database!');
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', '[Server] Error while loading database: ' + err.message + '\n' + err.stack);
  }
};
