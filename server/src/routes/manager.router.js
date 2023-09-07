const managerRouter = require('express').Router();

const { User, Call } = require('../../db/models');

managerRouter.get('/', async (req, res) => {
  try {
    const { team_id } = req.session;
    const users = await User.findAll({ where: { team_id, isAdmin: false } });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

managerRouter.post('/', async (req, res) => {
  const { name, login, password } = req.body
  const { team_id } = req.session;
  try {
    const newUser = await User.create({ name, login, password, team_id, isAdmin: false });
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
});

managerRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const team_id = null;
    const user = await User.findByPk(id);
    const editUser = user.update({ team_id });
    res.sendStatus(204); // Отправить статус "No Content" в ответе
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

module.exports = managerRouter;
