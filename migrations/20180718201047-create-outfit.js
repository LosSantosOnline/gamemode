'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Outfits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      owner: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Characters',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'default'
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      blends: {
        type: Sequelize.STRING,
        allowNull: false
      },
      features: {
        type: Sequelize.STRING,
        allowNull: false
      },
      components: {
        type: Sequelize.STRING,
        allowNull: false
      },
      textures: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hairColor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      overlays: {
        type: Sequelize.STRING,
        allowNull: false
      },
      decorations: {
        type: Sequelize.STRING,
        allowNull: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Outfits')
  }
}
