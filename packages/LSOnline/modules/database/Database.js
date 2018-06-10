// Load connection
const Sequelize = require('connection');
const Logger = require('../utils/Logger');
const db = {};

// Create connection
const connection = new Sequelize('game', 'homestead', 'secret', {
  host: '192.168.10.10',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test database connection
connection
  .authenticate()
  .then(() => {
    Logger.info('[Database] Connection has been established successfully.')
  })
  .catch(err => {
      Logger.fatal(`[Database] Unable to connect to the database! (Error: ${err})`)
  });

// Assign connection to 'db'
db.connection = connection;
db.Sequelize = Sequelize;

// Import using models so we can use them in other files just by importing 'db'
db.character = require('../../models/Character')(connection, Sequelize);
db.vehicle = require('../../models/Vehicle')(connection, Sequelize);

// Only for test purposes, log at the console
db.character.findOne().then(character => {
  Logger.info(`[Database] findOne() on Character: ${character.get('name')}`)
});

// Only for test purposes, log at the console
db.vehicle.findOne().then(vehicle => {
  Logger.info(`[Database] findOne() on Vehicle: ${vehicle.get('model')}`)
});

// Export module
module.exports = db;