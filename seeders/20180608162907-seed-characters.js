'use strict';

const faker = require('faker')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Characters', [{
            name: faker.name.findName(),
            age: faker.random.number(),
            money: faker.random.number(),
            admin: true,
            owner: 1,
            sex: 1,
            createdAt: faker.date.past(),
            updatedAt: faker.date.past()
        }], {});
    },

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Characters', null, {})
};
