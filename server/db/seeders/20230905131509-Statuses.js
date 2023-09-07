/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [{
      name: 'No money',
      team_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'In work',
      team_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'No answer',
      team_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  },
};
