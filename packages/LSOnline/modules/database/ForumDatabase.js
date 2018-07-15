// Libs
const Sequelize = require('sequelize');
const Logger = require('../utils/Logger');
const db = {};

// Create connection
const connection = new Sequelize(process.env.DATABASE_FORUM_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    operatorsAliases: false,

    //logging: false,

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
        Logger.info(`[ForumDatabase] Connection has been established successfully. Connected to '${process.env.DATABASE_HOST}' database.`)
    })
    .catch(err => {
        Logger.fatal(`[ForumDatabase] Unable to connect to the database! (Error: ${err})`)
    });

// Assign connection to 'db'
db.connection = connection;
db.Sequelize = Sequelize;

// Export module
module.exports = db;