'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
      {
        id: 1,
        name: 'Client A',
        balance: 1000,
        phone: '123456789',
        email: 'clienta@example.com',
        status: 'Active',
        manager_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Client B',
        balance: 500,
        phone: '987654321',
        email: 'clientb@example.com',
        status: 'Inactive',
        manager_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
