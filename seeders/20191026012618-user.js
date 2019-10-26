'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email:'sandy@gmail.com',
        password:'xxx',
        name:'Sandy Rahmansyah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null,{});
  }
};
