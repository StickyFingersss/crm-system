'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        name: 'Client A',
        balance: 1000,
        phone: '123456789',
        email: 'clienta@example.com',
        status_id: 1,
        team_id: 1,
        manager_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Client B',
        balance: 500,
        phone: '987654321',
        email: 'clientb@example.com',
        status_id: 2,
        team_id: 1,
        manager_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Client C',
        balance: 500,
        phone: '135798642',
        email: 'clientc@example.com',
        status_id: 3,
        team_id: 2,
        manager_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
