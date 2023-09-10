/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Deals', [{
      total: 100,
      user_id: 1,
      customer_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      total: 100,
      user_id: 1,
      customer_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      total: 100,
      user_id: 3,
      customer_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      total: 100,
      user_id: 3,
      customer_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      total: 100,
      user_id: 1,
      customer_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      total: 100,
      user_id: 3,
      customer_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Deals', null, {});
  },
};
