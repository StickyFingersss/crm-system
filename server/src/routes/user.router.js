const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const { User } = require('../../db/models');

usersRouter.post('/register', async (req, res) => {
  try {
    const { name, login, password, team_id } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { name } });
    if (user) {
      res.json({ err: 'неверные данные' });
    } else {
      const newUser = await User.create({
        name,
        login,
        password: hash,
        isAdmin: true,
        team_id,
      });
      req.session.userId = newUser.id;
      req.session.name = newUser.name;
      req.session.login = newUser.login;
      req.session.isAdmin = newUser.isAdmin;
      req.session.team_id = newUser.team_id;
      req.session.save();
      res.json({ message: 'есть пробитие' });
    }
  } catch (error) {
    console.log('Ошибка регистрации', error);
  }
});

usersRouter.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.userId = user.id;
        req.session.name = user.name;
        req.session.login = user.login;
        req.session.isAdmin = user.isAdmin;
        req.session.team_id = user.team_id;
        req.session.isAdmin = user.isAdmin;

        req.session.save();
        res.json({ message: 'есть пробитие' });
      } else {
        res.json({ err: 'неверные данные' });
      }
    } else {
      res.json({ err: 'пользователь не найден' });
    }
  } catch (error) {
    console.log('Ошибка авторизации', error);
  }
});

usersRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('CRM');
  res.sendStatus(200);
});

usersRouter.get('/userData', (req, res) => {
  res.json(req.session);
});

usersRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    res.json(user);
  } catch (error) {
    console.log('Ошибка авторизации', error);
  }
});

module.exports = usersRouter;
