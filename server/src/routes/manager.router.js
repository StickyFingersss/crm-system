const managerRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

managerRouter.get('/', async (req, res) => {
  try {
    const { team_id, isAdmin } = req.session;

    if (isAdmin) {
      const users = await User.findAll({ where: { team_id, isAdmin: false } });
      console.log("🚀 ~ file: manager.router.js:12 ~ managerRouter.get ~ users:", users);
      res.json(users);
    } else {
      res.json([]);
    }
  } catch (error) {
    console.log(error);
  }
});

managerRouter.post('/', async (req, res) => {
  const { name, login, password } = req.body;
  const { team_id } = req.session;
  const hash = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({ name, login, password: hash, team_id, isAdmin: false });
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
    user.update({ team_id });
    res.sendStatus(204); // Отправить статус "No Content" в ответе
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

module.exports = managerRouter;
