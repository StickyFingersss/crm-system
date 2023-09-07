const statusRouter = require('express').Router();
const { Status } = require('../../db/models');

statusRouter.get('/all', async (req, res) => {
  const { team_id } = req.session;
  try {
    const statuses = await Status.findAll({ where: { team_id } });
    res.json(statuses);
  } catch (error) {
    console.log(error);
  }
});

statusRouter.post('/', async (req, res) => {
  const { team_id } = req.session;
  const { name } = req.body;
  try {
    const statusCreated = await Status.create({ name, team_id });
    res.json(statusCreated);
  } catch (error) {
    console.log(error);
  }
});

statusRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const statusDelered = await Status.destroy({ where: { id } });
    res.json(statusDelered);
  } catch (error) {
    console.log(error);
  }
});

module.exports = statusRouter;
