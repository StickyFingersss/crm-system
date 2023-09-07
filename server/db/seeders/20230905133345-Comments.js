'use strict';

const { DATEONLY } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          text: 'This is a comment by User 1 for Customer 1',
          user_id: 1, // Замените на существующий ID пользователя
          customer_id: 1, // Замените на существующий ID заказчика
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Another comment by User 2 for Customer 2',
          user_id: 2, // Замените на существующий ID пользователя
          customer_id: 2, // Замените на существующий ID заказчика
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Добавьте другие комментарии, если нужно
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
