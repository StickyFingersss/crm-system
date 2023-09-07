'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        login: 'johndoe',
        password: 'password123',
        isAdmin: false,
        team_id: 1, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        login: 'janesmith',
        password: 'password456',
        isAdmin: true,
        team_id: 2, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        login: 'janesmith',
        password: 'password456',
        isAdmin: false,
        team_id: 2, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        login: 'janesmith',
        password: 'password456',
        isAdmin: false,
        team_id: 2, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        login: 'janesmith',
        password: 'password456',
        isAdmin: false,
        team_id: 2, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        login: 'janesmith',
        password: 'password456',
        isAdmin: false,
        team_id: 2, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        login: 'janesmith',
        password: 'password456',
        isAdmin: false,
        team_id: 2, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        login: 'janesmith',
        password: 'password456',
        isAdmin: false,
        team_id: 2, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Smith',
        login: 'johnsmith',
        password: 'password135',
        isAdmin: false,
        team_id: 1, // Замените на нужное значение
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Добавьте другие записи, если нужно
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
