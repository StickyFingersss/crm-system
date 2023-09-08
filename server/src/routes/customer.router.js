const customerRouter = require('express').Router();
const commentRouter = require('./comment.router');

const { Customer, Comment, User, Status } = require('../../db/models');

customerRouter.use('/comment', commentRouter);

customerRouter.get('/all/', async (req, res) => {
  const { team_id } = req.session;
  try {
    const customers = await Customer.findAll({ where: { team_id } });
    console.log(customers);
    res.json(customers);
  } catch (error) {
    console.log(error);
  }
});

customerRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const customers = await Customer.findOne({
      where: { id },
      include: [{ model: Status }],
      raw: true,
      nest: true,
    });
    res.json(customers);
  } catch (error) {
    console.log(error);
  }
});

customerRouter.put('/create');

module.exports = customerRouter;
