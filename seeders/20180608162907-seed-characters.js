'use strict';

const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Characters', [{
        name: faker.name.findName(),
        money: faker.random.number(),
        admin: true,
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      }], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Characters', null, {})
};
