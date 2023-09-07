/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [{
      name: 'No money',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'In work',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'No answer',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  },
};
