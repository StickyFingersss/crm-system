const todosRouter = require('express').Router();
const { Task } = require('../../db/models');

todosRouter.get('/', async (req, res) => {
  try {
    const todos = await Task.findAll();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

module.exports = todosRouter;
