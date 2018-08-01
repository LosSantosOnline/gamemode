// Libs
const Sequelize = require('sequelize')
const Logger = require('../utils/Logger')
const glob = require('glob')
const path = require('path')
const db = {}

// Create connection
const connection = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  operatorsAliases: false,

  // logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// Test database connection
connection
  .authenticate()
  .then(() => {
    Logger.info(`[Database] Connection has been established successfully. Connected to '${process.env.DATABASE_HOST}' database.`)
  })
  .catch(err => {
    Logger.fatal(`[Database] Unable to connect to the database! (Error: ${err})`)
  })

// Models
glob.sync('./packages/LSOnline/models/*.js').forEach((file) => {
  file = path.parse(file)
  if (file.name !== 'Account') {
    db[file.name.toLowerCase()] = connection['import'](path.join(__dirname, '../../models', file.name))
  }
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// Assign connection to 'db'
db.connection = connection
db.Sequelize = Sequelize

// Export module
module.exports = db
