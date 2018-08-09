'use strict';
const fs = require('fs-nextra');
const path = require('path');
const dir = path.join(__dirname, '..');
const pattern = new RegExp('ClientProvider', 'i');

module.exports = async () => {
  try {
    console.log('\x1b[36m%s\x1b[0m', '[Server] Loading client providers...');

    const [size] = await fs.scan(dir, { filter: (stats, filepath) => stats.isFile() && path.extname(filepath) === '.js' && path.parse(filepath).name.search(pattern) > 0 })
      .then(files => Promise.all([...files.keys()].map(file => {
        load(path.relative(dir, file));
        return files.size;
      })));
    console.log('\x1b[36m%s\x1b[0m', `[Server] Loaded ${size} client providers!`);
  } catch (err) {
    return console.log('\x1b[31m%s\x1b[0m', '[Server] Error while loading client providers: ' + err.message + '\n' + err.stack);
  }
};

let load = (file) => {
  const filepath = path.join(dir, file);
  require(filepath);
};
