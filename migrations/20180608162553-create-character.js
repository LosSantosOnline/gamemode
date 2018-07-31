'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      money: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      owner: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sex: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      posX: {
        type: Sequelize.FLOAT(10, 6),
        defaultValue: 0.0,
        allowNull: false
      },
      posY: {
        type: Sequelize.FLOAT(10, 6),
        defaultValue: 0.0,
        allowNull: false
      },
      posZ: {
        type: Sequelize.FLOAT(10, 6),
        defaultValue: 0.0,
        allowNull: false
      },
      exitType: {
        type: Sequelize.STRING,
        defaultValue: 'disconnect'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Characters')
}
