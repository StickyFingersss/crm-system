const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const { User } = require('../../db/models');

usersRouter.post('/register', async (req, res) => {
  try {
    const { name, login, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.findOne({ where: { name } });
    if (user) {
      res.send(201);
    } else {
      const newUser = await User.create({
        name,
        login,
        password: hash,
        isAdmin: true,
        team_id: 1,
      });
      req.session.userId = newUser.id;
      req.session.name = newUser.name;
      req.session.login = newUser.login;
      req.session.isAdmin = newUser.isAdmin;
      req.session.team_id = newUser.team_id;
      req.session.save(() => {
        res.json(newUser);
      });
    }
  } catch (error) {
    console.log('Ошибка регистрации', error);
  }
});

usersRouter.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.userId = user.id;
        req.session.name = user.name;
        req.session.login = user.login;
        req.session.team_id = user.team_id;
        req.session.save(() => {
          res.json(user);
        });
      } else {
        res.status(201);
      }
    }
  } catch (error) {
    console.log('Ошибка авторизации', error);
  }
});

usersRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('CRM');
  res.send(200);
});

module.exports = usersRouter;
