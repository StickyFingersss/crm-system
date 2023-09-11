/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const callsRouter = require('express').Router();
const { User, Call, Deal } = require('../../db/models');

callsRouter.get('/report', async (req, res) => {
  try {
    const { team_id } = req.session;
    const users = await User.findAll({
      where: {
        team_id,
        isAdmin: false,
      },
      attributes: ['id', 'name'],
    });
    const calls = await Call.findAll();
    const userCallCount = {};

    for (const call of calls) {
      const { user_id } = call;
      if (userCallCount[user_id]) {
        userCallCount[user_id] += 1;
      } else {
        userCallCount[user_id] = 1;
      }
    }
    const callsForTeamMembers = [];

    for (const user of users) {
      const userId = user.id;
      const callObj = {};
      callObj.name = user.name;
      callObj.count = userCallCount[userId] || 0;

      const deals = await Deal.findAll({
        where: {
          user_id: user.id,
        },
      });

      const total = deals.reduce((sum, deal) => sum + deal.total, 0);
      callObj.total = total || 0;

      callObj.dealCount = deals.length || 0;

      callsForTeamMembers.push(callObj);
    }
    res.json(callsForTeamMembers);
  } catch (error) {
    console.log(error);
  }
});

callsRouter.post('/:id/create', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;
  try {
    const call = await Call.create({
      user_id: userId,
      customer_id: id,
    });
    res.json(call);
  } catch (error) {
    console.log(error);
  }
});

module.exports = callsRouter;
