'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Teams',
      [
        {
          name: 'Team 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Team 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Team 3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Добавьте здесь больше записей, если необходимо
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  },
};
