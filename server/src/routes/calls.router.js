const callsRouter = require('express').Router();
const { User, Call } = require('../../db/models');

callsRouter.get('/report', async (req, res) => {
  try {
    const { team_id } = req.session;
    const users = await User.findAll({
      where: {
        team_id,
        isAdmin: false,
      },
      attributes: ['id', 'name'], // Include only id and name attributes
    });
    const calls = await Call.findAll();
    const userCallCount = {};

    calls.forEach((call) => {
      const { user_id } = call;
      if (userCallCount[user_id]) {
        userCallCount[user_id] += 1;
      } else {
        userCallCount[user_id] = 1;
      }
    });
    const callsForTeamMembers = [];
    users.forEach((user) => {
      const userId = user.id;
      if (userCallCount.hasOwnProperty(userId)) {
        const callObj = {};
        callObj.name = user.name;
        callObj.count = userCallCount[userId];
        callsForTeamMembers.push(callObj);
      }
    });
    res.json(callsForTeamMembers);
  } catch (error) {
    console.log(error);
  }
});

module.exports = callsRouter;
