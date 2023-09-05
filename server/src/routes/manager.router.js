const managerRouter = require('express').Router();
const { where } = require('sequelize');
const { User, Call } = require('../../db/models');

managerRouter.get('/', async (req, res) => {
  try {
    const { user } = req.sessions;
    const users = await User.findAll({ where: { team_id: user.team_id, isAdmin: false } });
    const calls = await Call.findAll();

    const userCallCount = {};

    calls.forEach((call) => {
      const { user_id } = call;
      if (userCallCount[user_id]) {
        userCallCount[user_id]++;
      } else {
        userCallCount[user_id] = 1;
      }
    });

    const userArr = [];

    users.forEach((user) => {
      const { id } = user;
    });

    const objKeys = Object.keys(userCallCount);

    console.log(calls);
    res.json(calls);
  } catch (error) {
    console.log(error);
  }
});

module.exports = managerRouter;
