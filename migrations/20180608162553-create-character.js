'use strict';

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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Characters')
};
