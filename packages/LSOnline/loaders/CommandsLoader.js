'use strict';

module.exports = async () => {
  console.log('\x1b[36m%s\x1b[0m', '[Server] Loading commands...');

  const commands = await rp.commands.loadFiles();

  console.log('\x1b[36m%s\x1b[0m', `[Server] Loaded ${commands.size} (${commands.size} files) commands!`);
};
