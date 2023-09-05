const todosRouter = require('express').Router();
const { Todo } = require('../../db/models');

todosRouter.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

module.exports = todosRouter;
