const todosRouter = require('express').Router();
const { Task } = require('../../db/models');

todosRouter.get('/', async (req, res) => {
  try {
    const todos = await Task.findAll({
      order: [['status', 'ASC'], ['deadline', 'ASC']],
    });
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

todosRouter.post('/', async (req, res) => {
  const { userId } = req.session;

  const {
    title, text, status, deadline, user_id,
  } = req.body;
  if (req.body.user_id) {
    try {
      const todo = await Task.create({
        title, text, status, deadline, user_id,
      });
      res.json(todo);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const todo = await Task.create({
        title, text, status, deadline, user_id: userId,
      });
      res.json(todo);
    } catch (error) {
      console.log(error);
    }
  }
});

todosRouter.patch('/:id', async (req, res) => {
  const { userId } = req.session;
  const {
    title, text, status, deadline, user_id,
  } = req.body;

  if (user_id) {
    try {
      const todo = await Task.findByPk(req.params.id);
      await todo.update(req.body);
      res.json(todo);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const todo = await Task.findByPk(req.params.id);
      await todo.update({ title, text, status, deadline, user_id: userId });
      res.json(todo);
    } catch (error) {
      console.log(error);
    }
  }
});

todosRouter.delete('/:id', async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = todosRouter;
