const getMockData = () => {
  const todos = [{
    id: 1, title: '123', text: '123', status: true, deadline: new Date(), userID: 1,
  },
  {
    id: 2, title: '456', text: '456', status: false, deadline: new Date(), userID: 1,
  },
  {
    id: 3, title: '567', text: '567', status: true, deadline: new Date(), userID: 2,
  },
  {
    id: 4, title: '789', text: '789', status: false, deadline: new Date(), userID: 3,
  },
  {
    id: 5,
    title: 'sdkfughaldufghsidufghsidf',
    text: 'sdlfjghsdfghsdfjgh;ksdjfhg;ksjdfhgk;;ksjdfhgk;jsdhfg;',
    status: false,
    deadline: new Date(),
    userID: 3,
  }];

  return todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    text: todo.text,
    status: todo.status,
    deadline: todo.deadline,
    userID: todo.userID,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const todos = getMockData();
    await queryInterface.bulkInsert('Todos', todos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
